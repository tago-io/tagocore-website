function Categories() {
  return (
    <div className="categories">
      <div className="category">MQTT</div>
      <div className="category">Service</div>
      <div className="category">Other</div>

      <style jsx>{`
        .categories {
          display: flex;
          margin-top: 5px;
          margin-left: -3px;
        }

        .categories .category {
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 5px;
          padding: 5px 10px;
          margin: 3px;
          font-size: 13px;
          background: white;
        }
      `}</style>
    </div>
  );
}

export default Categories;
