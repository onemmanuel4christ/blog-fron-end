import'./settings.css'
import BlogSide from '../../component/BlogSide'
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import axios from "../../axios";

const Settings = () => {
  const [file, setFile] = useState(null);
  const [username , setUsername] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user } = useContext(Context);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const updatedUser = {
        userId: user._id,
        username,
        email,
        password
    };

    if(file){
        const data = new FormData()
        const filename = Date.now() +file.name;
        data.append("name", filename)
        data.append("file", file);
        updatedUser.profilePicture = filename;
        try {
            await axios.post('/upload', data)
          } catch (error) { }
        }
        try {
          await axios.put("/users/"+user._id, updatedUser)
          setSuccess(true)
    } catch (error) {}
}
  return (
    <div className='settings'>
      <div className="settingsWrapper">
      <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
             src={user.profilePicture}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fas fa-user-circle"></i>{" "}
            </label>
            <input
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                className="settingsPPInput"
                onChange={(e) =>setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input 
              type="text" 
              placeholder={user.username} 
              name="name"
              onChange={(e) =>setUsername(e.target.value)} 
          />
          <label>Email</label>
          <input 
              type="email" 
              placeholder={user.email} 
              name="email" 
              onChange={(e) =>setEmail(e.target.value)} 

          />
          <label>Password</label>
          <input 
              type="password" 
              onChange={(e) =>setPassword(e.target.value)} 


          />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          {success && <span style={{color: 'green'}}>Profile hasbeen updated sucessfully...</span>}
        </form>
      </div>
        <BlogSide />
    </div>
  )
}

export default Settings