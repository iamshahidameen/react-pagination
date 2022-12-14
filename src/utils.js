const paginate = (users) => {
  const itemsPerPage = 10;
  const noOfPages = Math.ceil(users.length / itemsPerPage);

  const newUsers = Array.from({ length: noOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return users.slice(start, start + itemsPerPage);
  });
  return newUsers;
};

export default paginate;
