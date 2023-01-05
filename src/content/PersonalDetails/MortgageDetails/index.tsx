import { yupResolver } from "@hookform/resolvers/yup";
import {
  Card,
  CardHeader,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Button, CardContent, styled } from "@mui/material";
import FormControl from "@mui/material/FormControl";

import MenuItem from "@mui/material/MenuItem";

import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

import { useCreateCatalogue } from "@/hooks/catalogue/useCatalogue";
import { AgentFieldStatus, AgentStatus } from "@/models/agentStatus";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";

interface Filters {
  status?: AgentFieldStatus;
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInputBoxes-root": {
      // margin: theme.spacing(1),
    },
  },
}));

const InputHeading = styled(Typography)(({ theme }) => ({
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "14px",
  lineHeight: "19px",
  textTransform: "capitalize",
  color: "#000000",
  padding: "5px 0px",
}));

const InputBoxes = styled(TextField)(({ theme }) => ({
  background: "#FFFFFF",
  // border: "0.5px solid #A6ACBE",
  // borderRadius: 4,
}));

const InputSelect = styled(Select)(({ theme }) => ({
  background: "#FFFFFF",
  // border: "0.5px solid #A6ACBE",
  // borderRadius: 4,
}));

const MortgageDetail = () => {
  const classes = useStyles();
  const router = useRouter();

  const [snack, setSnack] = useState(false);
  const [imageUrl, setImageUrl] = useState<string[]>();

  const createCatalogueHook = useCreateCatalogue();

  const addCatalogue = Yup.object().shape({
    name: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    discountApplicable: Yup.string().required("Required"),
    color: Yup.string().required("Required"),
    price: Yup.number().required("Required"),
    status: Yup.string().required("Required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addCatalogue),
    mode: "onChange",
  });

  const [currency, setCurrency] = useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const onSubmit = async (data) => {
    const res: any = await createCatalogueHook.mutateAsync({
      body: {
        ...data,
        discountApplicable:
          data?.discountApplicable === "reremortgage" ? true : false,
        images: imageUrl,
      },
    });
    if (res?.status === "success") {
      // handleClose(true);
    }
  };

  return (
    <Container maxWidth="xl">
      <Card
        sx={{
          background: "#FFF",
          borderRadius: 1,
          boxShadow: "0px 2px 5px 0px rgb(58 53 65 / 10%)",
        }}
      >
        <CardHeader
          title=" Mortgage Details"
          sx={{
            fontWeight: 600,
            fontSize: "16px",

            letterSpacing: "0.01em",
            color: "#292D32",
          }}
        />
        <CardContent>
          <Card
            sx={{
              padding: 2,
              background: "#EEF7FE",
              borderRadius: 1,
              boxshadow: "0px 2px 5px 0px rgb(58 53 65 / 10%)",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={1}>
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "19px",
                    textTransform: "capitalize",
                    marginTop: 2,
                    color: "#4B473E",
                  }}
                >
                  Buyer Type
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControl
                  fullWidth
                  sx={{
                    background: "#FFF",
                  }}
                >
                  <InputSelect
                    {...register("discountApplicable")}
                    fullWidth
                    labelId="demo-simple-InputSelect-helper-label"
                    id="demo-simple-InputSelect-helper"
                    name="category"
                    error={Boolean(errors?.discountApplicable)}
                    defaultValue="remortgage"
                  >
                    <MenuItem value="reremortgage">Remortgage</MenuItem>
                    <MenuItem value="remortgage">Remortgage</MenuItem>
                  </InputSelect>
                  <Typography color="error">
                    {errors?.discountApplicable?.message as string}
                  </Typography>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={2}>
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "19px",
                    textTransform: "capitalize",
                    color: "#4B473E",
                    marginTop: 2,
                  }}
                >
                  Mortgage Product Type
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControl fullWidth style={{ background: "#FFF" }}>
                  <InputSelect
                    {...register("discountApplicable")}
                    fullWidth
                    labelId="demo-simple-InputSelect-helper-label"
                    id="demo-simple-InputSelect-helper"
                    name="category"
                    error={Boolean(errors?.discountApplicable)}
                    defaultValue="remortgage"
                  >
                    <MenuItem value="reremortgage">Remortgage</MenuItem>
                    <MenuItem value="remortgage">Remortgage</MenuItem>
                  </InputSelect>
                  <Typography color="error">
                    {errors?.discountApplicable?.message as string}
                  </Typography>
                </FormControl>
              </Grid>
            </Grid>
          </Card>
          <CardHeader
            title=" Mortgage Security Address"
            sx={{
              fontWeight: 600,
              fontSize: "16px",

              letterSpacing: "0.01em",
              color: "#292D32",
            }}
          />
          <Card
            sx={{
              background: "#EEF7FE",
              borderRadius: 1,
              boxshadow: "0px 2px 5px 0px rgb(58 53 65 / 10%)",
            }}
          >
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <InputBoxes
                    {...register("category")}
                    fullWidth
                    placeholder="Enter postcode"
                    error={Boolean(errors?.category)}
                    helperText={
                      errors.category
                        ? `Category is ${errors.category?.message}`
                        : null
                    }
                    sx={{ background: "#FFF" }}
                  />
                </Grid>
                <Grid xs={12} md={2}></Grid>
                <Grid xs={12} md={2}></Grid>
                <Grid item xs={12} md={2}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      background:
                        "linear-gradient(91.88deg, #4B65B2 2.83%, #13BBE6 100%)",
                      color: "#FFF",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "15px 20px 14px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "21px",
                      textAlign: "center",
                      borderRadius: 40,
                    }}
                    onClick={handleSubmit(onSubmit)}
                  >
                    Search Podcast
                  </Button>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      background:
                        "linear-gradient(91.88deg, #4B65B2 2.83%, #13BBE6 100%)",
                      color: "#FFF",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "15px 25px 14px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "21px",
                      textAlign: "center",
                      borderRadius: 40,
                    }}
                    onClick={handleSubmit(onSubmit)}
                  >
                    Enter Manually
                  </Button>
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  item
                  container
                  md
                  spacing={2}
                  sx={{ alignItems: "end" }}
                ></Grid>
              </Grid>
            </CardContent>
          </Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <InputHeading>Street Address</InputHeading>
                <InputBoxes
                  {...register("name")}
                  fullWidth
                  placeholder="-"
                  error={Boolean(errors?.name)}
                  helperText={
                    errors.name ? `Name is ${errors.name?.message}` : null
                  }
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <InputHeading>Town</InputHeading>
                <InputBoxes
                  {...register("category")}
                  fullWidth
                  placeholder="-"
                  error={Boolean(errors?.category)}
                  helperText={
                    errors.category
                      ? `Category is ${errors.category?.message}`
                      : null
                  }
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <InputHeading>Country</InputHeading>
                <InputBoxes
                  {...register("category")}
                  fullWidth
                  placeholder="-"
                  error={Boolean(errors?.category)}
                  helperText={
                    errors.category
                      ? `Category is ${errors.category?.message}`
                      : null
                  }
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <InputHeading>Post Code</InputHeading>
                <InputBoxes
                  {...register("category")}
                  fullWidth
                  placeholder="-"
                  error={Boolean(errors?.category)}
                  helperText={
                    errors.category
                      ? `Category is ${errors.category?.message}`
                      : null
                  }
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <InputHeading>Property Purchase Price</InputHeading>
                <InputBoxes
                  {...register("category")}
                  fullWidth
                  placeholder="-"
                  error={Boolean(errors?.category)}
                  helperText={
                    errors.category
                      ? `Category is ${errors.category?.message}`
                      : null
                  }
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <InputHeading>Lender</InputHeading>
                <InputBoxes
                  {...register("category")}
                  fullWidth
                  placeholder="-"
                  error={Boolean(errors?.category)}
                  helperText={
                    errors.category
                      ? `Category is ${errors.category?.message}`
                      : null
                  }
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <InputHeading>Lender Reference</InputHeading>
                <InputBoxes
                  {...register("category")}
                  fullWidth
                  placeholder="-"
                  error={Boolean(errors?.category)}
                  helperText={
                    errors.category
                      ? `Category is ${errors.category?.message}`
                      : null
                  }
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h5">Term Years</Typography>
                <InputBoxes
                  {...register("category")}
                  fullWidth
                  placeholder="-"
                  error={Boolean(errors?.category)}
                  helperText={
                    errors.category
                      ? `Category is ${errors.category?.message}`
                      : null
                  }
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <InputHeading>Rate</InputHeading>
                <InputBoxes
                  {...register("category")}
                  fullWidth
                  placeholder="-"
                  error={Boolean(errors?.category)}
                  helperText={
                    errors.category
                      ? `Category is ${errors.category?.message}`
                      : null
                  }
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <InputHeading>Mortgage Amount</InputHeading>
                <InputBoxes
                  {...register("category")}
                  fullWidth
                  placeholder="-"
                  error={Boolean(errors?.category)}
                  helperText={
                    errors.category
                      ? `Category is ${errors.category?.message}`
                      : null
                  }
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth>
                  <InputHeading>Repayment Type</InputHeading>
                  <InputSelect
                    {...register("discountApplicable")}
                    fullWidth
                    labelId="demo-simple-InputSelect-helper-label"
                    id="demo-simple-InputSelect-helper"
                    name="category"
                    error={Boolean(errors?.discountApplicable)}
                    defaultValue="remortgage"
                  >
                    <MenuItem value="reremortgage">remortgage</MenuItem>
                    <MenuItem value="remortgage">remortgage</MenuItem>
                  </InputSelect>
                  <Typography color="error">
                    {errors?.discountApplicable?.message as string}
                  </Typography>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <InputHeading>Rate</InputHeading>
                <InputBoxes
                  {...register("category")}
                  fullWidth
                  placeholder="-"
                  error={Boolean(errors?.category)}
                  helperText={
                    errors.category
                      ? `Category is ${errors.category?.message}`
                      : null
                  }
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <InputHeading>Offer Expiry Date</InputHeading>
                <InputBoxes
                  {...register("color")}
                  fullWidth
                  placeholder="-"
                  error={Boolean(errors?.color)}
                  helperText={
                    errors.color ? `Color is ${errors.color?.message}` : null
                  }
                />
              </Grid>
              <Grid item xs={12} md={4}></Grid>
              <Grid item xs={12} md={4}></Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "16px",

                    letterSpacing: "0.01em",
                    color: "#292D32",
                    marginTop: 1,
                  }}
                >
                  Solicitor Details
                </Typography>
              </Grid>

              <Grid item xs={12} md={4}>
                <InputHeading>Name</InputHeading>
                <InputBoxes
                  {...register("color")}
                  fullWidth
                  placeholder="-"
                  error={Boolean(errors?.color)}
                  helperText={
                    errors.color ? `Color is ${errors.color?.message}` : null
                  }
                />
              </Grid>

              <Grid item xs={12} md={8}>
                <InputHeading>Address</InputHeading>
                <InputBoxes
                  {...register("color")}
                  fullWidth
                  placeholder="-"
                  error={Boolean(errors?.color)}
                  helperText={
                    errors.color ? `Color is ${errors.color?.message}` : null
                  }
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <InputHeading>Postcode</InputHeading>
                <InputBoxes
                  {...register("color")}
                  fullWidth
                  placeholder="-"
                  error={Boolean(errors?.color)}
                  helperText={
                    errors.color ? `Color is ${errors.color?.message}` : null
                  }
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <InputHeading>Phone No.</InputHeading>
                <InputBoxes
                  {...register("color")}
                  fullWidth
                  placeholder="-"
                  error={Boolean(errors?.color)}
                  helperText={
                    errors.color ? `Color is ${errors.color?.message}` : null
                  }
                />
              </Grid>

              <Grid item xs={12} md={4}></Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "16px",

                    letterSpacing: "0.01em",
                    color: "#292D32",
                    marginTop: 1,
                  }}
                >
                  Estate Agent Details
                </Typography>
              </Grid>

              <Grid item xs={12} md={4}>
                <InputHeading>Name</InputHeading>
                <InputBoxes
                  {...register("color")}
                  fullWidth
                  placeholder="-"
                  error={Boolean(errors?.color)}
                  helperText={
                    errors.color ? `Color is ${errors.color?.message}` : null
                  }
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <InputHeading>Address</InputHeading>
                <InputBoxes
                  {...register("color")}
                  fullWidth
                  placeholder="-"
                  error={Boolean(errors?.color)}
                  helperText={
                    errors.color ? `Color is ${errors.color?.message}` : null
                  }
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <InputHeading>Postcode</InputHeading>
                <InputBoxes
                  {...register("color")}
                  fullWidth
                  placeholder="-"
                  error={Boolean(errors?.color)}
                  helperText={
                    errors.color ? `Color is ${errors.color?.message}` : null
                  }
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <InputHeading>Phone No.</InputHeading>
                <InputBoxes
                  {...register("color")}
                  fullWidth
                  placeholder="-"
                  error={Boolean(errors?.color)}
                  helperText={
                    errors.color ? `Color is ${errors.color?.message}` : null
                  }
                />
              </Grid>
            </Grid>
          </CardContent>
        </CardContent>
      </Card>
    </Container>
  );
};

export default MortgageDetail;