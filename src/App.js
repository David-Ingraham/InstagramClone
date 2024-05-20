
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Homepage from './Homepage';
import Authentication from './authentication/authentication.js';
import { useEffect } from 'react';
import { auth } from './firebase.js';
import { loginUser, setLoading } from './features/userSlice.js';


function App() {
  const user = useSelector((state) => state.data.user.user)
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        dispatch(loginUser({
          uid: authUser.uid,
          username: authUser.displayName,
          email: authUser.email
        }))

        dispatch(setLoading(false))

      }else{
        console.log('user is not logged int')
      }
    })
  }, [])
  const isLoading = useSelector(state => state.data.user.isLoading)
  return (
    <div className="app">

      {isLoading ? (<div className='loader-container'>
        <div className='loader' ></div>
      </div>) : ( <> {user ? (<Homepage/>) : (<Authentication/>)} </>)}

      
      
      
      

    </div>
  );
}

export default App;
