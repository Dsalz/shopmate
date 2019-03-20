import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  // palette: {
  //   primary: {
  //     main: "#f62f5e"
  //   }
  // },
  typography: {
    useNextVariants: true,
    fontFamily: '"Open Sans", sans-serif',
    h6: {
      fontFamily: '"Montserrat", sans-serif'
    }
  }
});
