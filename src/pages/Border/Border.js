import React from "react";

import { Field, Form, Formik } from "formik";
import { Box, Container, Grid, Typography } from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

import Option from "../../components/common/option/Option";
import AppLayout from "../../components/layout/AppLayout";
import "../BoxShadow/BoxShadow.scss";
import "./Border.scss";
import FormSelect from "../../components/common/form/Select/Select";
import { borderType } from "../../components/jsonData";

const Border = () => {
  const [color, setColor] = React.useState("#000000");
  const [backgroundColor, setBackgroundColor] = React.useState("#ffffff");

  let border = (values) => {
    return {
      border: `${values.values.border_width}px ${values.values.border_type} ${color}`,
    };
  };

  let background = {
    backgroundColor: backgroundColor,
  };

  return (
    <AppLayout>
      <section className="custom_section border_section">
        <Typography variant="h1" className="title">
          Border Options
        </Typography>
        <Container>
          <Grid container className="grid_container">
            <Formik
              initialValues={{
                border_width: 1,
                border_type: "solid"
              }}
            >
              {(values) => (
                <>
                  <Grid item xs={5} className="left_column custom_colum">
                    <Form>
                      <Option
                        label="Border Width"
                        name="border_width"
                        type="select"
                        min={0}
                        max={200}
                        step={1}
                      />
                      <Box className="slider_wrapper">
                        <Box className="slider_title">
                          <Typography variant="h5">Border type</Typography>
                          <Box className="slider_input"> 
                          <Field
                            name="border_type"
                            dropDownIon="keyboardArrow"
                            component={FormSelect}
                            optionData={borderType}
                            optionValueKey="id"
                            optionLabelKey="value"
                        /></Box>
                        </Box>
                      </Box>
                      <Box className="colorPicker_wrapper">
                        <Typography typography="h5">Border Color</Typography>
                        <MuiColorInput
                          value={color}
                          onChange={(color) => setColor(color)}
                        />
                      </Box>
                      <Box className="colorPicker_wrapper">
                        <Typography typography="h5">
                          Background Color
                        </Typography>
                        <MuiColorInput
                          value={backgroundColor}
                          onChange={(color) => setBackgroundColor(color)}
                        />
                      </Box>
                    </Form>
                  </Grid>
                  <Grid item xs={7} className="right_column custom_colum">
                    <Box
                      className="display_box"
                      style={{ ...border(values), ...background }}
                    ></Box>
                    <Box className="result_content">
                      <Typography variant="h6">
                        {`-webkit-border: ${values.values.border_width}px ${values.values.border_type} ${color}`}
                      </Typography>
                      <Typography variant="h6">
                        {`-moz-border: ${values.values.border_width}px ${values.values.border_type} ${color}`}
                      </Typography>
                      <Typography variant="h6">
                        {`border: ${values.values.border_width}px ${values.values.border_type} ${color}`}
                      </Typography>
                      <ContentCopyOutlinedIcon className="textCopy_icon icon_large" />
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

export default Border;