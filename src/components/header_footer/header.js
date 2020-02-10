import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer';

class Header extends React.Component {

    state={
        drawerOpen:false
    }

    toggleDrawer = (value)=>{
        this.setState({
            drawerOpen: value
        });
    }


    render(){
        return(
            
              <AppBar
                position="fixed"
                style={{
                    backgroundColor:'#2f2f2f',
                    boxShadow:'none',
                    padding:'10px 0px',
                   
                }}

              >
                  <Toolbar>
                      <div className="header_logo">
                          <div className="font_righteous header_logo_venue">
                             The Venue
                          </div>
                          <div className="header_logo_title">
                              Musical Events
                          </div>

                      </div>
                       
                       <IconButton 
                        aria-label="Menu"
                        color="inherit"
                        onClick={()=>console.log(4)}
                       >
                           <MenuIcon />
                       </IconButton>

                       <SideDrawer
                         open={this.state.drawerOpen}
                         onClose={this.toggleDrawer}
                       />

                  </Toolbar>
              </AppBar>
            
        );
    }
}

export default Header;