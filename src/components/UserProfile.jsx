import React, { useState, useEffect } from "react";
import { Table, Button, Divider } from "rsuite";

const UserProfile = () => {
  const [users, setUsers] = useState();
  const [sortColumn, setSortColumn] = useState();
  const [sortType, setSortType] = useState();
  const [loading, setLoading] = useState(false);

  const { Column, HeaderCell, Cell } = Table;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((users) => {
        console.log("Users", users);
        setUsers(users);
      })
      .catch((error) => console.log("Failed to fetch Users from server", error));
  }, []);

  const getData = () => {
    if (sortColumn && sortType) {
      return users.sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];
        if (typeof x === "string") {
          x = x.charCodeAt();
        }
        if (typeof y === "string") {
          y = y.charCodeAt();
        }
        if (sortType === "asc") {
          return x - y;
        } else {
          return y - x;
        }
      });
    }
    return users;
  };

  const handleSortColumn = (sortColumn, sortType) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSortColumn(sortColumn);
      setSortType(sortType);
    }, 500);
  };

  const ActionCell = ({ rowData, dataKey, ...props }) => {
  function handleAction() {
    console.log(`id:${rowData[dataKey]}`);
  }
  return (
    <Cell {...props} className="link-group">
      <Button appearance="primary" size="xs" onClick={handleAction}>View Profile</Button>
      <Divider vertical />
      <Button appearance="primary" size="xs" onClick={handleAction}>View Post</Button>
    </Cell>
  );
};

  return (
    <Table
      height={500}
      data={getData()}
      sortColumn={sortColumn}
      sortType={sortType}
      onSortColumn={handleSortColumn}
      loading={loading}
      onRowClick={(data) => {
        console.log(data);
      }}
    >
      <Column width={50} align="center" fixed sortable>
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={150} fixed sortable>
        <HeaderCell>Name</HeaderCell>
        <Cell dataKey="name" />
      </Column>

      <Column width={150} fixed sortable>
        <HeaderCell>Username</HeaderCell>
        <Cell dataKey="username" />
      </Column>

      <Column width={300} sortable>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>

      <Column width={150} sortable>
        <HeaderCell>Phone</HeaderCell>
        <Cell dataKey="phone" />
      </Column>

      <Column width={150}>
        <HeaderCell>Website</HeaderCell>
        <Cell dataKey="website" />
      </Column>

      <Column width={260}>
        <HeaderCell>Action</HeaderCell>
        <ActionCell dataKey="id" />
      </Column>
    </Table>
  );
};

export default UserProfile;
