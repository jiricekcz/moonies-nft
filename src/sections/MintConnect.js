import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { animated, useSpring } from "react-spring";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navigation from "../components/Navigation";
import { connect } from "../redux/blockchain/blockchainActions";
import { useSelector } from "react-redux";
import { fetchData } from "../redux/data/dataActions";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";

const MintConnect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  const data = useSelector((state) => state.data);
  const blockchain = useSelector((state) => state.blockchain);

  const [claimingNFT, setNFTClaimed] = useState(false);
  const [buyQuantity, setBuyQuantity] = useState(1);
  const [buyCost, setBuyCost] = useState(0);
  const [isConnected, setConnected] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [connectBtnText, setConnectBtnText] = useState("Connect");
  const [displayMsg, setDisplayMsg] = useState("Click buy to mint your NFT.");

  const toastMessage = (message) => toast(message);

  const [loadedConfig, setLoadedConfig] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    MAX_BUY_QUANTITY: 10,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
  });

  useEffect(() => {
    (async function () {
      await fetch("/config/config.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(async (response) => {
          const config = await response.json();
          setBuyCost(config.DISPLAY_COST);
          setLoadedConfig(config);
        })
        .catch((e) => {
          console.log(e);
        });
    })();
  }, []);

  const handleBuyQuantityDecrement = () => {
    buyQuantity > 1 && setBuyQuantity(buyQuantity - 1);
  };

  const handleBuyQuantityIncrement = () => {
    buyQuantity < loadedConfig.MAX_BUY_QUANTITY &&
      setBuyQuantity(buyQuantity + 1);
  };

  useEffect(() => {
    setBuyCost(Math.round(buyQuantity * loadedConfig.DISPLAY_COST * 100) / 100);
  }, [buyQuantity]);

  const handleConnect = (e) => {
    e.preventDefault();
    if (blockchain.account === null) {
      setLoading(true);
      !isConnected && setConnectBtnText("Connecting");
      dispatch(connect()).then((response) => {
        if (response !== undefined) {
          setConnected(false);
          setLoading(false);
          setConnectBtnText("Connect");
          toastMessage(response.payload);
        }
      });
      getData();
    }
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
      setConnected(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  useEffect(() => {
    displayMsg !== "Click buy to mint your NFT." && toastMessage(displayMsg);
  }, [displayMsg]);

  const handleBuyNFT = (e) => {
    e.preventDefault();
    claimNFTs();
    setLoading(true);
    getData();
  };

  const claimNFTs = () => {
    let cost = loadedConfig.WEI_COST;
    let gasLimit = loadedConfig.GAS_LIMIT;
    let totalCostWei = String(cost * buyQuantity);
    let totalGasLimit = String(gasLimit * buyQuantity);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setDisplayMsg(`Minting your ${loadedConfig.NFT_NAME}...`);
    setNFTClaimed(true);
    console.log(loadedConfig.CONTRACT_ADDRESS);
    console.log(blockchain.account);
    console.log(totalCostWei);
    var gasAmount = blockchain.smartContract.methods
      .mintMany(buyQuantity)
      .estimateGas({
        to: loadedConfig.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .then(() => {
        console.log(gasAmount);
        gasAmount = Math.round(gasAmount * 1.2);
        console.log("gas limit estimation = " + gasAmount + " units");
        console.log({
          from: loadedConfig.CONTRACT_ADDRESS,
          value: totalCostWei,
        });

        blockchain.smartContract.methods
          .mintMany(buyQuantity)
          .send({
            to: loadedConfig.CONTRACT_ADDRESS,
            from: blockchain.account,
            value: totalCostWei,
            gas: gasAmount,
          })
          .once("error", (err) => {
            console.log(err);
            setDisplayMsg(
              "Sorry, something went wrong please try again later."
            );
            setNFTClaimed(false);
          })
          .then((receipt) => {
            console.log(receipt);
            setDisplayMsg(`WOW, the ${loadedConfig.NFT_NAME} is yours!`);
            setNFTClaimed(false);
            setLoading(false);
            dispatch(fetchData(blockchain.account));
          });
      });
  };

  const loadingAnimation = useSpring({
    from: {
      opacity: 0,
      scale: 0.5,
    },
    to: [
      {
        opacity: 1,
        scale: 1,
      },
    ],
    config: { mass: 3, tension: 300, friction: 25 },
  });

  return (
    <div
      style={{
        minWidth: "100vw",
        minHeight: "100vh",

        backgroundColor:
          "radial-gradient(ellipse at bottom,var(--dark) 0%,var(--primary-dark) 100%)",
      }}
    >
      <Navigation />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        theme="dark"
        toastStyle={{
          backgroundColor: "rgba(var(--light-rgb), 0.95)",
          border: "2px solid var(--light)",
          color: "var(--dark)",
          borderRadius: 50,
          textAlign: "center",
          fontSize: 18,
        }}
        closeButton={false}
        rtl={false}
        draggable
        pauseOnHover
      />
      {loadedConfig !== null && (
        <div className="centered mint-container">
          <animated.div style={loadingAnimation}>
            <h1>
              <strong>Mint your Moonie!</strong>
            </h1>
            <h1>
              {data.totalSupply} / {loadedConfig.MAX_SUPPLY}
            </h1>
            <a
              href={loadedConfig.SCAN_LINK}
              target="_blank"
              rel="noreferrer"
              style={{ all: "unset" }}
            >
              <motion.h5 whileHover={{ fontSize: "22px" }}>
                {loadedConfig.CONTRACT_ADDRESS.substring(0, 15)}...
              </motion.h5>
            </a>
            {data.totalSupply >= loadedConfig.MAX_SUPPLY ? (
              <div>
                <h1>The sale has ended.</h1>
                <h3>You can still find {loadedConfig.NFT_NAME} on</h3>
                <a
                  target={"_blank"}
                  href={loadedConfig.MARKETPLACE_LINK}
                  style={{ all: "unset" }}
                  rel="noreferrer"
                >
                  <motion.h3 whileHover={{ fontSize: "32px" }}>
                    {loadedConfig.MARKETPLACE}
                  </motion.h3>
                </a>
              </div>
            ) : (
              <div>
                <h2>
                  {buyQuantity} {loadedConfig.SYMBOL} costs {buyCost}{" "}
                  {loadedConfig.NETWORK.SYMBOL}
                </h2>
                <h5>Excluding gas fees</h5>

                {isConnected ? (
                  <div className="row justify-content-center">
                    <h3>{displayMsg}</h3>
                    <br />
                    <br />
                    <button
                      className="quantity-btn"
                      disabled={claimingNFT ? true : false}
                      onClick={handleBuyQuantityDecrement}
                    >
                      -
                    </button>
                    <span className="quantity">{buyQuantity}</span>
                    <button
                      className="quantity-btn"
                      style={{ marginBottom: 30 }}
                      disabled={claimingNFT ? true : false}
                      onClick={handleBuyQuantityIncrement}
                    >
                      +
                    </button>
                    <center>
                      <button
                        disabled={claimingNFT ? true : false}
                        onClick={handleBuyNFT}
                        className="primary-btn"
                        style={{
                          width: "200px",
                          background: "var(--secondary)",
                        }}
                      >
                        {claimingNFT ? "BUSY" : "BUY"}
                      </button>
                    </center>
                  </div>
                ) : (
                  <div>
                    <center>
                      <h4>
                        Connect to the {loadedConfig.NETWORK.NAME} network
                      </h4>
                      <br />
                      <div className="row justify-content-center">
                        <button
                          onClick={handleConnect}
                          disabled={isLoading}
                          className="col-md-auto primary-btn"
                          style={{
                            fontSize: connectBtnText === "Connecting" && 18,
                            minWidth: "200px",
                            background: "var(--primary)",
                            marginRight: width > 992 && 20,
                            marginBottom: width < 992 && 20,
                          }}
                        >
                          {connectBtnText}
                        </button>
                        <br />
                        <button
                          onClick={() => navigate("/")}
                          className="col-md-auto primary-btn"
                          style={{
                            minWidth: "200px",
                            background: "var(--secondary)",
                          }}
                        >
                          Back
                        </button>
                      </div>
                    </center>
                  </div>
                )}
              </div>
            )}
          </animated.div>
        </div>
      )}
    </div>
  );
};

export default MintConnect;
