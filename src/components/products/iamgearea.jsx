
import React ,{useCallback} from "react"
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { storege } from '../../firebase';
import { DeleteButton } from "../UIkid";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));


const UploadButtons =(props)=> {
  const classes = useStyles();

  const deleteImage=useCallback((id)=>{
    props.setImage([]);
    return storege.ref('images').child(id).delete()
  },[props.setImage])

  const upLoadImage=useCallback((event)=>{
    const file = event.target.files;
    let blob = new Blob(file, { type: "image/jpeg" });
    const S="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const N=16;
    const id =Array.from(Array(N)).map(()=>S[Math.floor(Math.random()*S.length)]).join('');
    
    const upLoadRef=storege.ref("images").child(id);
    const upLoadTask =upLoadRef.put(blob);

    upLoadTask.then(()=>{
      upLoadTask.snapshot.ref.getDownloadURL()
      .then((url)=>{
        const newImage = {id: id, path: url};
        props.setImage((prevState => [...prevState, newImage]))
      })
    })
  },[props.setImage])
  return (
    <div> 
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file"  onChange={(e)=>upLoadImage(e)}/>
      {props.image.length ===0 &&(
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <p>写真の追加</p>
          <PhotoCamera />
        </IconButton>
      </label>
      )}
     {props.image.length >0 &&(
      <div className="container">
      <img src={props.image[0].path} alt="プレビュー画像"/>
      <DeleteButton onClick={()=>deleteImage(props.image[0].id)} label={"削除"}/>
      </div>
     )}
    </div>
  );
}
export default UploadButtons;
