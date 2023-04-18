import "./App.css";
import Button from "./component/button/button";
import FormElement from "./component/Form/FormElement";
import Hooksfun from "./component/Hooksfun/Hooksfun";
import Listitem from "./component/listItm/Listitem";
import Some from "./component/some/some";
import Test from "./component/Test/Test";
const users = [
  {
    id: 1,
    name: "nandhu",
    place: "hosur",
    url: "https://thumbs.dreamstime.com/b/landscape-nature-mountan-alps-rainbow-76824355.jpg",
  },
  {
    id: 2,
    name: "vijay",
    place: "bangalore",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a2/1121098-pink-nature-wallpaper-1920x1080-lockscreen.jpg",
  },
  {
    id: 3,
    name: "maan",
    place: "chennai",
    url: "https://thumbs.dreamstime.com/b/landscape-nature-mountan-alps-rainbow-76824355.jpg",
  },
  { id: 4, name: "gokul", place: "hosur" },
];

function App() {
  // var aaaaaaa = 10;
  var sign = true;
  var myname = "sampath";
  function receive(data) {
    console.log("parent data function", data);
  }

  return (
    <div>
      <h1 className="headcolor">welcome</h1>
      <Test mynamedata={myname} parentfun={receive}>
        {" "}
      </Test>
      <FormElement userdata={users}></FormElement>
      <Hooksfun> </Hooksfun>
      {sign && <Some></Some>}
      <Listitem userdata={users}></Listitem>
    </div>
  );
}
// receive()
export default App;
// style={{ color: "green" }}
