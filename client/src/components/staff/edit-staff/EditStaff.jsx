import { useSelector } from 'react-redux';
import esSCSS from './esCSS.module.css';

const EditStaff = () => {
  const { staff } = useSelector((state) => state.staff);

  const sortedStaff = [...staff].sort((a, b) =>
    a.staffName.localeCompare(b.staffName),
  );

  return (
    <div className={esSCSS.container}>
      <h1>Edit Staff</h1>
      <label htmlFor="selectEditStaff">
        Elige a quién queres editar:
        <select id="selectEditStaff">
          {sortedStaff.map((member) => (
            <option key={member.id} value={member.id}>
              {member.staffName}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default EditStaff;
