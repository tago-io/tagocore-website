/**
 * Props.
 */
interface IPaginationProps {
  amount: number;
  current: number;
  onNext: () => void;
  onPrevious: () => void;
}

/**
 * Pagination of the plugin list.
 */
function Pagination(props: IPaginationProps) {
  const { current, amount, onNext, onPrevious } = props;

  return (
    <div className="pagination">
      <span onClick={onPrevious} className={`arrow ${current === 0 ? "disabled" : ""}`}>
        {"<"}
      </span>

      <span className="numbers">
        <span>{current + 1}</span>
        <span className="of">of</span>
        <span>{amount || "-"}</span>
      </span>

      <span onClick={onNext} className={`arrow ${current === amount - 1 || !amount ? "disabled" : ""}`}>
        {">"}
      </span>

      <style jsx>{`
        .pagination {
          margin: 0 auto;
          margin-top: 20px;
          margin-bottom: 20px;
        }

        .pagination * {
          -webkit-user-select: none; /* Safari */
          -moz-user-select: none; /* Firefox */
          -ms-user-select: none; /* IE10+/Edge */
          user-select: none; /* Standard */
        }

        .pagination .arrow {
          display: inline-flex;
          padding: 10px 15px;
          align-items: center;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 7px;
          background: white;
          cursor: pointer;
        }

        .pagination .arrow:hover {
          background: rgba(0, 0, 0, 0.05);
        }

        .pagination .arrow:active {
          background: rgba(0, 0, 0, 0.1);
        }

        .pagination .arrow.disabled {
          pointer-events: none;
          opacity: 0.5;
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
