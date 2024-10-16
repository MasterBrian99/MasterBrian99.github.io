import {
  ListIcon,
  ListItem as ListItems,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { ListRenderItem } from "../../../data/mainData";
import { AiOutlineGithub } from "react-icons/ai";
const ListItem = () => {
  return (
    <div>
      <UnorderedList display="inline-flex" listStyleType="none">
        {ListRenderItem.map((el, i: number) => (
          <a href={el.url} key={i}>
            <ListItems
              display="flex"
              justifyContent="center"
              alignItems="center"
              ml="2"
              className={"list-item"}
            >
              <ListIcon as={el.icon} color="white" mr="1" />
              {el.name}
            </ListItems>
          </a>
        ))}

        <a href="">
          <ListItems
            display="flex"
            justifyContent="center"
            alignItems="center"
            ml="2"
            className={"list-item-contact"}
            color="#000000"
          >
            <ListIcon as={AiOutlineGithub} color="black" mr="1" />
            Github
          </ListItems>
        </a>
      </UnorderedList>
    </div>
  );
};

export default ListItem;
