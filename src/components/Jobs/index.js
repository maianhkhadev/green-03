import { useState, useEffect } from "react";
import "./style.css";
import { getJobs, createJob, editJob, deleteJob } from "../../apis/jobs";
import List from "../List";

const DEFAULT_FORM_DATA = { title: "", type: "", descriptor: "" };

const Jobs = () => {
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    getJobs()
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = () => {};

  const onCreate = () => {
    if (!formData.id) {
      createJob(formData)
        .then((res) => {
          fetchData();
          setFormData(DEFAULT_FORM_DATA);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (formData.id) {
      editJob(formData.id, formData)
        .then((res) => {
          setFormData(DEFAULT_FORM_DATA);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const onEdit = (item) => {
    setFormData(item);
  };

  const onDelete = (e) => {
    deleteJob(e).then((res) => {
      fetchData();
    });
    const newList = list.filter((a) => {
      return a.id !== e.id;
    });
    setList(newList);
  };

  return (
    <div>
      <header className="header row">
        <h4 className="col-7">Tasks</h4>
        <div className="container">
          <List list={list} onDelete={onDelete} onEdit={onEdit} />
        </div>
      </header>
    </div>
  );
};

export default Jobs;
