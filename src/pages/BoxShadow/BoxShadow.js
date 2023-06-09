import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

import { Form, Formik } from "formik";
import Option from "../../components/common/option/Option";
import "./BoxShadow.scss";
import AppLayout from "../../components/layout/AppLayout";
import { MuiColorInput } from "mui-color-input";
import { textCopyFunc } from "../../components/common/Utils";

const BoxShadow = () => {
  const [color, setColor] = React.useState("rgb(0, 0, 0)");
  const [bgColor, setBgColor] = React.useState("rgb(198, 198, 198)");

  let borderRadius = (values) => {
    return {
      boxShadow: `${values.values.horizontal_range}px ${values.values.vertical_range}px ${values.values.blur_radius}px ${values.values.spread_radius}px ${color}`,
    };
  };

  let backgroundColor = {
    backgroundColor: `${bgColor}`,
  };

  return (
    <AppLayout>
    <section className="custom_section">
      <Typography variant="h1" className="title">Box Shadow Generator</Typography>
      <Container>
        <Grid container className="grid_container">
          <Formik
            initialValues={{
              horizontal_range: 0,
              vertical_range: 0,
              blur_radius: 0,
              spread_radius: 0,
            }}
            onSubmit={(values, actions) => {}}
            // handleChange={(searchOption) => {
            //   console.log(searchOption, "changing");
            // }}
          >
            {(values) => (
              <>
                <Grid item xs={5} className="left_column custom_colum">
                  <Form>
                    <Option label="Horizontal Length" name="horizontal_range" min={-200} max={200} step={1}/>
                    <Option label="Vertical Length" name="vertical_range" min={-200} max={200} step={1}/>
                    <Option label="Blur Radius" name="blur_radius" min={-200} max={200} step={1}/>
                    <Option label="Spread Radius" name="spread_radius" min={-200} max={200} step={1}/>
                    <Box className="colorPicker_wrapper">
                        <Typography typography="h5">Box-Shadow Color</Typography>
                        <MuiColorInput value={color} onChange={(color) => setColor(color)} />
                      </Box>
                      <Box className="colorPicker_wrapper">
                        <Typography typography="h5">Background Color</Typography>
                        <MuiColorInput value={bgColor} onChange={(bgColor) => setBgColor(bgColor)} />
                      </Box>
                  </Form>
                </Grid>
                <Grid item xs={7} pl={5} className="right_column custom_colum">
                  <Box className="display_box"
                    style={{ ...borderRadius(values), ...backgroundColor}} >    
                  </Box>
                  <Box
                      className="result_content" id="result_text" >
                      <Typography variant="h6" id="paymentLink" className="paymentLink">
                        {`-webkit-box-shadow: ${values.values.horizontal_range}px ${values.values.vertical_range}px ${values.values.blur_radius}px ${values.values.spread_radius}px ${color};`}
                      </Typography>
                      <Typography variant="h6" id="paymentLink" className="paymentLink">
                        {`-moz-box-shadow: ${values.values.horizontal_range}px ${values.values.vertical_range}px ${values.values.blur_radius}px ${values.values.spread_radius}px ${color};`}
                      </Typography>
                      <Typography variant="h6" id="paymentLink" className="paymentLink">
                        {`box-shadow: ${values.values.horizontal_range}px ${values.values.vertical_range}px ${values.values.blur_radius}px ${values.values.spread_radius}px ${color};`}
                      </Typography>
                      <ContentCopyOutlinedIcon onClick={ () => textCopyFunc("result_text") } className="textCopy_icon icon_large" />
                      <Box className="success_message" id="success_message">Text copied Successfully</Box>
                    </Box>
                </Grid>
              </>
            )}
          </Formik>
        </Grid>
      </Container>
    </section>
    </AppLayout>

  );
};

export default BoxShadow;
