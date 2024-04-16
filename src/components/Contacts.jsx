import Background from "./Background";
import Button from "./micro-components/Button";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

function Contacts() {
  return (
    <Background>
      <div className="flex justify-between pt-12">
        <h2 className="title">Contacts</h2>
        <Button text="add new contact" />
      </div>
      <br />
      <div className="bg-white relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left">
          <thead>
            <tr>
              <th className="px-6 py-3"></th>
              <th className="px-6 py-3">full name</th>
              <th className="px-6 py-3">gender</th>
              <th className="px-6 py-3">e-mail</th>
              <th className="px-6 py-3">phone</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="px-6 py-4 font-medium ">
                <img src="wwf" alt="image" />
              </th>
              <td className="px-6 py-4">Dion Fernando</td>
              <td className="px-6 py-4">Male</td>
              <td className="px-6 py-4">dion342@gmail.com</td>
              <td className="px-6 py-4">0776342513</td>
              <td className="px-6 py-4 flex justify-around">
                <MdModeEdit />
                <RiDeleteBinLine />
              </td>
            </tr>
            <tr>
              <th className="px-6 py-4 font-medium ">
                <img src="wwf" alt="image" />
              </th>
              <td className="px-6 py-4">Dion Fernando</td>
              <td className="px-6 py-4">Male</td>
              <td className="px-6 py-4">dion342@gmail.com</td>
              <td className="px-6 py-4">0776342513</td>
              <td className="px-6 py-4 flex justify-around">
                <MdModeEdit />
                <RiDeleteBinLine />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Background>
  );
}

export default Contacts;
