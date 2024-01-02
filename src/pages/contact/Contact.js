import {
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { FormHelperText, Input } from "@mui/joy";
import DownloadResume from "../../component/DownloadResume";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is required"),
  subject: yup
    .string()
    .min(2, "Subject must be at least 2 characters")
    .required("Subject is required"),
  message: yup
    .string()
    .min(2, "Message must be at least 2 characters")
    .required("Message is required"),
});

export default function Contact() {
  const isMobile = useMediaQuery("(max-width: 1000px)");

  const formik = useFormik({
    //for validating the values
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
      SendMessage(values.name, values.email, values.subject, values.message);
    },
  });

  const SendMessage = async (name, email, subject, message) => {
    const data = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    // Send form data to Formspree
    const formspreeEndpoint = "https://formspree.io/f/xleqebab";
    const response = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Message sent successfully!");
    } else {
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <Container
      id="contact"
      maxWidth="fluid"
      sx={{
        backgroundColor: "#050505",
        height: (isMobile === true && "100%") || "110vh",
        display: "flex",
        alignItems: "center",
        pt: 15,
        pb: 15,
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          direction={(isMobile === true && "column") || "row"}
          flexDirection={(isMobile === true && "column-reverse") || ""}
          alignItems="center"
          spacing={5}
        >
          <Grid item xs={(isMobile === true && 12) || 7}>
            <img src="./img/oznur-yilmaz.png" alt="" width="100%" />
          </Grid>
          <Grid item xs={(isMobile === true && 12) || 5} width="100%">
            <form onSubmit={formik.handleSubmit}>
              <Stack spacing={1} mb={2} width="100%">
                <Typography variant="body1" fontWeight="bold" color="primary">
                  CONTACT WITH ME
                </Typography>
                <Typography variant="h5" fontWeight="bold" color="white">
                  Full Stack Developer
                  <br /> .NET & React Js Developer
                </Typography>
                <Divider />
                <Input
                  placeholder="Name & surname…"
                  variant="outlined"
                  color="neutral"
                  id="name"
                  {...formik.getFieldProps("name")}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <FormHelperText>
                  {formik.touched.name && formik.errors.name}
                </FormHelperText>
                <Input
                  placeholder="Email"
                  variant="outlined"
                  color="neutral"
                  id="email"
                  {...formik.getFieldProps("email")}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <FormHelperText>
                  {formik.touched.email && formik.errors.email}
                </FormHelperText>
                <Input
                  placeholder="Subject"
                  variant="outlined"
                  color="neutral"
                  id="subject"
                  {...formik.getFieldProps("subject")}
                  error={
                    formik.touched.subject && Boolean(formik.errors.subject)
                  }
                  helperText={formik.touched.subject && formik.errors.subject}
                />
                <FormHelperText>
                  {formik.touched.subject && formik.errors.subject}
                </FormHelperText>
                <Input
                  placeholder="Message"
                  multi
                  variant="outlined"
                  color="neutral"
                  id="message"
                  {...formik.getFieldProps("message")}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  helperText={formik.touched.message && formik.errors.message}
                />
                <FormHelperText>
                  {formik.touched.message && formik.errors.message}
                </FormHelperText>
              </Stack>
              <Divider />
              <Stack direction="row" alignItems="center" mt={3} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  sx={{
                    backgroundColor: "primary",
                    color: "black",
                    textTransform: "capitalize",
                    borderRadius: 2,
                  }}
                >
                  Send!
                </Button>
                <DownloadResume />
              </Stack>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
