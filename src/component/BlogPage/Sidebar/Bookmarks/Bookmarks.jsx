import React from 'react';
import './Bookmarks.css'
import { ToastContainer, toast } from 'react-toastify';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

// function AlertDismissibleExample() {
//     const [show, setShow] = useState(true);
  
//     if (show) {
//       return (
//         <Alert variant="danger" onClose={() => setShow(false)} dismissible>
//           <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
//           <p>
//             Change this and that and try again. Duis mollis, est non commodo
//             luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
//             Cras mattis consectetur purus sit amet fermentum.
//           </p>
//         </Alert>
//       );
//     }
//     return <Button onClick={() => setShow(true)}>Show Alert</Button>;
//   }
  
//   <AlertDismissibleExample />


const Bookmarks = (props) => {
    const bookmarks = props.bookmarks;
    console.log();

    console.log('bookmarked : ',bookmarks);
    
    let title = [];
    let quantity = 0;
    for(const bookmark of bookmarks){
        if(bookmark.quantity===0)
        {
            bookmark.quantity=1;
            title.push(bookmark.title);
        }
        else{
            // setShow(true);
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
            
            
            
            toast("Warning:You have already Bookmarked this blog");
            console.log('Warningnfsofygysrggrg')
        }
        
        
        quantity = quantity + 1 ;
        title.push(bookmark.title);
    }
    console.log('Total quantity: ', quantity);
    console.log('total Title :', title.length)

    return (
        <div className='bookmarks'>
            <h3>Bookmarked Blogs : {quantity}</h3>
            {
                title.map(t => <p id='single-bookmark'>{t} </p>)
            }

        </div>
    );
};

export default Bookmarks;