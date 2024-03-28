import { useEffect } from "react";
import { useSelector } from "react-redux";

const CreateOwner = () => {
  const { staff } = useSelector((state) => state.staff);
  useEffect(() => {
    console.log(staff);
  }, [staff]);

  return (
    <div>
      <h1>Create Owner</h1>
    </div>
  );
};

export default CreateOwner;
