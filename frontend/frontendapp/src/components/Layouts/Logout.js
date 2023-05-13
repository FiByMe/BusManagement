class Logout extends Component {
    logout = () => {
      localStorage.removeItem("token");
      window.location.href = "/login";
    };
  
    render() {
      return (
        <div>
          <h1>Are you sure you want to logout?</h1>
          <button onClick={this.logout}>Logout</button>
        </div>
      );
    }
  }
  
  export default Logout;