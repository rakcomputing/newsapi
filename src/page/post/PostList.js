import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
import "./PostList.css";
import { Circles } from "react-loader-spinner";
const PostList = () => {
  const { searchTerm } = useOutletContext();
  const [posts, setPosts] = useState([]);
  const [listNews, setListNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [loading, setloading] = useState(false);
  // Sample data
  const list = [
    {
      _id: "1",
      username: "Raksmey Chann",
      content:
        "This is a sample post.This is a sample postThis is a sample postThis is a sample postThis is a sample postThis is a sample post",
      photoUrl:
        "https://www.prokerala.com/news/photos/imgs/1200/ladakh-photo-unsplash-1457172.jpg",
      timestamp: "2023-05-23T08:30:00Z",
    },
    {
      _id: "2",
      username: "Raksmey",
      content: "This is another sample post.",
      photoUrl:
        "https://www.prokerala.com/news/photos/imgs/1200/ladakh-photo-unsplash-1457172.jpg",
      timestamp: "2023-05-23T09:30:00Z",
    },
    {
      _id: "3",
      username: "Raksmey",
      content: "This is another sample post.",
      photoUrl:
        "https://www.prokerala.com/news/photos/imgs/1200/ladakh-photo-unsplash-1457172.jpg",
      timestamp: "2023-05-23T09:30:00Z",
    },
  ];

  // Mimic data fetching
  useEffect(() => {
    setPosts(list);
    getListNews();
  }, []);

  const getListNews = async () => {
    const response = await axios.get(
      "https://newsapi.org/v2/everything?q=apple&from=2024-05-24&to=2024-05-24&sortBy=popularity&apiKey=4ccb35fa4dcb43a8b494babec47e2024"
    );
    try {
      if (response) {
        setloading(true);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setListNews(response.data.articles);
        setFilteredNews(response.data.articles);
        setloading(false);
      } else {
        setloading(false);
      }
      console.table("this sis news list : ", response.data.articles.urlToImage);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (listNews) {
      // Add null check
      const results = listNews.filter(
        (listItem) =>
          listItem.title &&
          listItem.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredNews(results);
    }
  }, [searchTerm, listNews]);
  return (
    <div>
      <div className="sprinSave-container">
        {/* Your other components */}
        {loading && (
          <div className="sprinSave">
            <Circles
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        )}
      </div>
      <div className="post-list">
        {filteredNews.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
