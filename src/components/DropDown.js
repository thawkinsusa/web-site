import React, {Component} from 'react'



class DropDown extends Component{
    constructor() {
        super();
        
        this.state = {
          showMenu: false,
        };
        
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
      }
      
      showMenu(event) {
        event.preventDefault();
        
        this.setState({ showMenu: true }, () => {
          document.addEventListener('click', this.closeMenu);
        });
      }
      
      closeMenu(event) {
        
        if (!this.dropdownMenu.contains(event.target)) {
          
          this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
          });  
          
        }
      }
    
      render() {
        return (
          <div>
            <button className='menu-btn-content' onClick={this.showMenu}>
            Menu<i className="fas fa-bars" />
            </button>
            
            {
              this.state.showMenu
                ? (
                  <div
                    className="menu"
                    ref={(element) => {
                      this.dropdownMenu = element;
                    }}
                  >
                    <button > Menu item 1 </button>
                    <button > Menu item 2 </button>
                    <button > Menu item 3 </button>
                  </div>
                )
                : (
                  null
                )
            }
          </div>
        );
      }
    }
export default DropDown  


// function menu(){
//         return(    <div class="dropdown-content">
//         <a href="#">Link 1</a>
//         <a href="#">Link 2</a>
//         <a href="#">Link 3</a>
//       </div>)
//     }
//     return(    
//     <div class="dropdown">
//     <button class="dropbtn" onClick={menu()}><i className="fas fa-bars" /></button>

//     </div>
//     )