import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import Add from "./Add";
import Edit from "./Edit";
import { useEffect, useState } from "react";
import "./style.css";

const Categories = ({ categories, setCategories, setFiltered, products }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [categoryTitle, setCategoryTitle] = useState("All");
  const user = JSON.parse(localStorage.getItem("posUser"));
  useEffect(() => {
    if (categoryTitle === "All") {
      setFiltered(products);
    } else {
      setFiltered(products.filter((item) => item.category === categoryTitle));
    }
  }, [products, setFiltered, categoryTitle]);

  return (
    <ul className="flex  flex-col ">
      {categories.map((item) => (
        <li
          className={`category-item ${
            item.title === "All"
              ? "!bg-red-500"
              : item.title === categoryTitle && "!bg-red-500"
          } g`}
          key={item._id}
          onClick={() => setCategoryTitle(item.title)}
        >
          <span>{item.title}</span>
        </li>
      ))}

      {user.isAdmin && (
        <>
          {" "}
          <li
            className="category-item !bg-gray-700 hover:opacity-90"
            onClick={() => setIsAddModalOpen(true)}
          >
            <PlusOutlined className="md:text-2xl" />
          </li>
          <li
            className="category-item !bg-gray-700 hover:opacity-90"
            onClick={() => setIsEditModalOpen(true)}
          >
            <EditOutlined className="md:text-2xl" />
          </li>
          <Add
            isAddModalOpen={isAddModalOpen}
            setIsAddModalOpen={setIsAddModalOpen}
            categories={categories}
            setCategories={setCategories}
          />
          <Edit
            isEditModalOpen={isEditModalOpen}
            setIsEditModalOpen={setIsEditModalOpen}
            categories={categories}
            setCategories={setCategories}
          />
        </>
      )}
    </ul>
  );
};

export default Categories;
