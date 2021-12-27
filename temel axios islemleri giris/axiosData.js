import axios from "axios";

export default async function getData(idNo) {
  const { data: getUser } = await axios(
    `https://jsonplaceholder.typicode.com/users/${idNo}`
  );
  const { data: getPosts } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${idNo}`
  );
  getUser.posts = getPosts;
  console.log(getUser);
}
