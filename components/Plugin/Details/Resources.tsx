/**
 * Renders the resources section of the plugin details page.
 */
function Resources() {
  return (
    <div className="resources">
      <div className="item">Repository</div>
      <div className="item">License</div>
      <div className="item">Changelog</div>
      <div className="item">Report abuse</div>

      <style jsx>{`
        .resources {
          display: flex;
          flex-direction: column;
          margin-top: 5px;
        }

        .resources .item {
          margin-bottom: 3px;
          color: #337ab7;
          font-size: 14px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default Resources;
