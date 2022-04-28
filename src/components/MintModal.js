import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { animated, useSpring } from "react-spring";

const MintModal = () => {
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
          setLoadedConfig(config);
        })
        .catch((e) => {
          console.log(e);
        });
    })();
  }, []);

  return (
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div
          class="modal-content"
          style={{ padding: "20px 20px", borderRadius: 25 }}
        >
          <div class="modal-body">
            <center>
              <a
                href={loadedConfig.SCAN_LINK}
                target="_blank"
                rel="noreferrer"
                style={{ color: "var(--dark)" }}
              >
                <span style={{ fontSize: 18 }}>
                  {loadedConfig.NETWORK.NAME} network
                </span>
              </a>
              <h2>
                1 {loadedConfig.SYMBOL} costs {loadedConfig.DISPLAY_COST}{" "}
                {loadedConfig.NETWORK.SYMBOL}
              </h2>
              <h6>Excluding gas fees</h6>
              <button
                type="button"
                class="btn primary-btn"
                data-bs-dismiss="modal"
                style={{
                  maxWidth: 50,
                  minWidth: 50,
                  background: "var(--primary)",
                  padding: "5px 14px",
                }}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintModal;
