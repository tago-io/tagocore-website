function Pagination() {
  return (
    <div className="pagination">
      <span className="arrow">{"<"}</span>
      <span className="numbers">
        <span>1</span>
        <span className="of">of</span>
        <span>2</span>
      </span>
      <span className="arrow">{">"}</span>

      <style jsx>{`
        .pagination {
          margin: 0 auto;
          margin-top: 20px;
          margin-bottom: 20px;
        }

        .pagination .arrow {
          display: inline-flex;
          padding: 10px 15px;
          align-items: center;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 7px;
          background: white;
        }

        .pagination .numbers {
          margin: 0px 20px;
        }

        .pagination .of {
          margin: 0px 10px;
        }
      `}</style>
    </div>
  );
}

export default Pagination;
