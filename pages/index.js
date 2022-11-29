import { Fragment, useEffect, useState } from "react";
import FiguresList from "../components/Figuers/FiguresList";
import Header from "../components/layout/Header";
import LoadMoreButton from "../components/UI/LoadMoreButton";
import SearchBar from "../components/SearchingFigures/SearchBar";

function HomePage({ data }) {
  console.log("data:", data);
  const [loadMoreInfo, setLoadInfo] = useState(false);
  const [figures, setFigures] = useState([...data.results]);
  const [nextPage, updateNextPage] = useState(data.info.next);
  const [filteredList, setFilteredList] = useState(figures);
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const loadMoreInfoHandler = () => {
    setLoadInfo(!loadMoreInfo);
  };

  // useEffect(() => {}, [figures]);
  useEffect(() => {
    if (nextPage === null) {
      return;
    } // if it's last page
    const request = async () => {
      const nextPageRes = await fetch(nextPage);
      const nextPageData = await nextPageRes.json();
      setFigures([...figures, ...nextPageData.results]);
      updateNextPage(nextPageData.info.next);
      console.log("figures: ", figures);
    };
    request();
    {
      <SearchBar
        figures={figures}
        setFilteredList={setFilteredList}
        setIsFiltered={setIsFiltered}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      ></SearchBar>;
    }
  }, [loadMoreInfo]);

  return (
    <Fragment>
      <title>The Rick And Morty Book</title>
      <meta
        name="description"
        content="Browse a huge list of Rick and Morty figures!"
      />
      <Header></Header>
      <SearchBar
        figures={figures}
        setFilteredList={setFilteredList}
        setIsFiltered={setIsFiltered}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      ></SearchBar>
      <FiguresList figures={!isFiltered ? figures : filteredList}></FiguresList>
      <LoadMoreButton
        onLoadMoreInfoHandler={loadMoreInfoHandler}
      ></LoadMoreButton>
    </Fragment>
  );
}

const URL = "https://rickandmortyapi.com/api/character";

export async function getServerSideProps() {
  const res = await fetch(URL);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default HomePage;
