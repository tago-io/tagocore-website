import SVGSearch from "../../SVG/SVGSearch";
import PluginCard from "./Card";
import Pagination from "./Pagination";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Loading from "../../Common/Loading/Loading";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IPlugin } from "../Plugin.types";
import SVGCog from "../../SVG/SVGCog";
import { useRouter } from "next/router";
import { theme } from "../../../styles/Theme";

/**
 * Query to fetch the categories and plugins.
 */
const QUERY = gql`
  query ($name: String!, $category: String) {
    categoryList {
      id
      name
    }
    pluginList(name: $name, category: $category) {
      name
      id
      short_description
      logo
      publisher {
        name
        verified
        domain
      }
    }
  }
`;

/**
 * List of plugins.
 */
function List() {
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState("");
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const categoryFromURL = router.query.category;

  const { loading, data } = useQuery(QUERY, {
    variables: { name: filter, category: categoryFromURL },
  });

  const pluginList = data?.pluginList || [];
  const categoryList = data?.categoryList || [];

  const amountPerPage = 12;
  const amountOfPages = Math.ceil(pluginList?.length / amountPerPage);

  const slicedList = pluginList.slice(currentPage * amountPerPage, currentPage * amountPerPage + amountPerPage);

  /**
   * Renders a single plugin card.
   */
  const renderCard = (x: IPlugin) => {
    return <PluginCard key={x.id} logoURL={x.logo} developer={x.developer} description={x.description} name={x.name} />;
  };

  /**
   * Renders a category on the sidebar.
   */
  const renderCategoryLink = (link: string, id?: string, label?: string) => {
    const selected = categoryFromURL === id;
    return (
      <Link key={label} href={link}>
        <a className={selected ? "selected" : ""}>{label}</a>
      </Link>
    );
  };

  /**
   * Saves the category list to avoid blinking.
   */
  useEffect(() => {
    if (categoryList?.length > 0) {
      setCategories(categoryList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryList?.length]);

  /**
   * Saves the category list to avoid blinking.
   */
  useEffect(() => {
    if (pluginList?.length > 0) {
      setCurrentPage(0);
    }
  }, [pluginList?.length]);

  return (
    <div className="plugin-list page-max-width">
      <div className="content">
        <div className="categories">
          <div className="inner-categories">
            <h3>Categories</h3>
            <div className="list">
              {renderCategoryLink("/pluginstore", undefined, "All categories")}
              {categories.map((x) => renderCategoryLink(`/pluginstore?category=${x.id}`, x.id, x.name))}
            </div>
          </div>
        </div>

        <div className="data">
          <div className="search">
            <SVGSearch width="20px" />
            <input
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Search plugins (i.e. MQTT, Grafana, MySQL...)"
            />
          </div>

          <div className="inner-data">
            {loading ? (
              <Loading />
            ) : !loading && slicedList.length === 0 ? (
              <div className="empty-warning">
                <SVGCog width="60px" />
                <span>No plugins found. Try looking in another category.</span>
              </div>
            ) : (
              <>
                {slicedList.slice(0, amountPerPage).map(renderCard)}
                {slicedList.slice(0, amountPerPage).map(renderCard)}
              </>
            )}
          </div>

          <Pagination
            onPrevious={() => setCurrentPage(currentPage - 1)}
            onNext={() => setCurrentPage(currentPage + 1)}
            current={currentPage}
            amount={amountOfPages}
          />
        </div>
      </div>

      <style jsx>{`
        .plugin-list {
          display: flex;
          margin-top: 40px;
          flex-direction: column;
        }

        .plugin-list .content {
          display: flex;
        }

        .plugin-list .empty-warning {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.5;
        }

        .plugin-list .empty-warning :global(svg) {
          margin-bottom: 10px;
          opacity: 0.5;
        }

        .plugin-list .categories {
          display: flex;
          flex-direction: column;
          width: 200px;
          margin-right: 40px;
        }

        .plugin-list .inner-categories {
          display: flex;
          flex-direction: column;
          width: 200px;
          position: fixed;
        }

        .plugin-list .inner-categories .list {
          display: flex;
          flex-direction: column;
        }

        .plugin-list .categories h3 {
          margin-bottom: 15px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .plugin-list .categories :global(a) {
          cursor: pointer;
          padding: 12px 0px;
          color: #323030;
          text-decoration: none;
        }

        .plugin-list .categories :global(a):first-child {
          padding-top: 0;
        }

        .plugin-list .categories :global(a):hover {
          color: ${theme.colors.link};
        }

        .plugin-list .categories :global(a.selected) {
          color: ${theme.colors.link};
          font-weight: bold;
        }

        .plugin-list .data {
          flex: 1;
          margin: -7px;
          margin-bottom: 20px;
          margin-top: 0;
          display: flex;
          flex-direction: column;
          position: relative;
          min-height: 850px;
        }

        .plugin-list .data .inner-data {
          display: flex;
          flex-wrap: wrap;
          flex: none;
          flex: 1;
          background: rgba(0, 0, 0, 0.05);
          padding: 5px;
          border-radius: 7px;
          align-content: flex-start;
        }

        .plugin-list .search {
          background: rgba(0, 0, 0, 0.05);
          width: 100%;
          padding: 10px;
          border-radius: 5px;
          margin-bottom: 10px;
          position: relative;
        }

        .plugin-list .search :global(svg) {
          position: absolute;
          left: 30px;
          top: 50%;
          transform: translate(0%, -50%);
          z-index: 111;
          opacity: 0.7;
        }

        .plugin-list .search input {
          border: 1px solid rgba(0, 0, 0, 0.1);
          outline: 0;
          border-radius: 5px;
          padding: 15px 15px;
          padding-left: 55px;
          font-size: 15px;
          width: 100%;
          transition: border-color 0.2s;
        }

        .plugin-list .search input:focus {
          border-color: ${theme.colors.link};
        }

        .plugin-list :global(.plugin-card) {
          min-width: calc(33.3333% - 10px);
          max-width: calc(33.3333% - 10px);
          height: 160px;
          align-self: stretch;
        }

        @media screen and (max-width: 1200px) {
          .plugin-list :global(.plugin-card) {
            min-width: calc(50% - 10px);
            max-width: calc(50% - 10px);
          }
        }

        @media screen and (max-width: 992px) {
          .plugin-list .content {
            flex-direction: column;
          }

          .plugin-list .inner-categories {
            position: initial;
            margin-bottom: 20px;
          }

          .plugin-list :global(.plugin-card) {
            min-width: calc(33.3333% - 10px);
            max-width: calc(33.3333% - 10px);
          }

          .plugin-list .categories,
          .plugin-list .inner-categories {
            width: 100%;
          }

          .plugin-list .inner-categories .list {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 100%;
            margin: 0px 30px;
            justify-content: center;
          }

          .plugin-list .inner-categories .list :global(a) {
            flex: none;
            width: 150px;
          }

          .plugin-list .categories :global(a):first-child {
            padding-top: 12px;
          }

          .plugin-list .categories h3 {
            text-align: center;
          }
        }

        @media screen and (max-width: 768px) {
          .plugin-list :global(.plugin-card) {
            min-width: calc(50% - 10px);
            max-width: calc(50% - 10px);
          }
        }

        @media screen and (max-width: 576px) {
          .plugin-list :global(.plugin-card) {
            min-width: calc(100% - 10px);
            max-width: calc(100% - 10px);
          }
        }
      `}</style>
    </div>
  );
}

export default List;
