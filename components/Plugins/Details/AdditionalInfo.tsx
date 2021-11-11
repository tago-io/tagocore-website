/**
 * Renders the additional info section of the plugin details page.
 */
function AdditionalInfo() {
  return (
    <div className="additional-info">
      <div className="item">
        <div>Version</div>
        <div>1.2.0</div>
      </div>

      <div className="item">
        <div>Developer</div>
        <div>MQTT Team</div>
      </div>

      <div className="item">
        <div>Downloads</div>
        <div>500,000+</div>
      </div>

      <div className="item">
        <div>Rating</div>
        <div>3.4</div>
      </div>

      <style jsx>{`
        .additional-info {
          display: flex;
          flex-direction: column;
          margin-top: 5px;
        }

        .additional-info .item {
          display: flex;
          margin-bottom: 3px;
        }

        .additional-info .item div {
          font-size: 14px;
        }

        .additional-info .item div:first-child {
          width: 100px;
          flex: none;
        }
      `}</style>
    </div>
  );
}

export default AdditionalInfo;
