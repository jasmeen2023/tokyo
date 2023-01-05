import {
  Button,
  Container,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  styled,
} from "@mui/material";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";

// import { useCreateCatalogue } from "@/hooks/catalogue/useCatalogue";

// const addCatalogue = Yup.object().shape({
//   name: Yup.string().required("Required"),
//   category: Yup.string().required("Required"),
//   discountApplicable: Yup.string().required("Required"),
//   color: Yup.string().required("Required"),
//   price: Yup.number().required("Required"),
//   status: Yup.string().required("Required"),
// });
// const {
//   register,
//   handleSubmit,
//   formState: { errors },
// } = useForm({
//   resolver: yupResolver(addCatalogue),
//   mode: "onChange",
// });

// const [currency, setCurrency] = useState("EUR");
// const [imageUrl, setImageUrl] = useState<string[]>();

// const handleChange = (event) => {
//   setCurrency(event.target.value);
// };

// const onSubmit = async (data) => {
//   const res: any = await createCatalogueHook.mutateAsync({
//     body: {
//       ...data,
//       discountApplicable:
//         data?.discountApplicable === "reremortgage" ? true : false,
//       images: imageUrl,
//     },
//   });
//   if (res?.status === "success") {
//     // handleClose(true);
//   }
// };

const InputBoxes = styled(TextField)(({ theme }) => ({
  background: "#FFFFFF",
}));

const InputSelect = styled(Select)(({ theme }) => ({
  background: "#FFFFFF",
}));

const rowdata = [
  {
    id: 1,
    name: "Title",
  },
  {
    id: 2,
    name: "First Name *",
  },
  {
    id: 3,
    name: "Middle Name",
  },
  {
    id: 4,
    name: "Surname *",
  },
  {
    id: 5,
    name: "Email *",
  },
  {
    id: 6,
    name: "Phone Number",
  },
  {
    id: 7,
    name: "Date of Birth",
  },
  {
    id: 8,
    name: "Nationality",
  },
  {
    id: 9,
    name: "Marital Status",
  },
  {
    id: 10,
    name: "VISA Type",
  },
  {
    id: 11,
    name: "Employment Status",
  },
  {
    id: 12,
    name: "Salary",
  },
  {
    id: 13,
    name: "Address History",
  },
  {
    id: 14,
    name: "Occupation",
  },
  {
    id: 15,
    name: "Outstanding",
  },
  {
    id: 16,
    name: "Dependence",
  },
];

const PersonalDetailsTab = () => {
  return (
    <Box>
      <Grid container mb={1}>
        <Grid
          item
          xs={12}
          sx={{
            background: "#4B65B2",
            borderRadius: "4px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0.5,
          }}
        >
          <Typography
            sx={{
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "19px",
              color: "#F6F7F8",
              padding: 2,
            }}
          >
            Applicant 1 Name
          </Typography>
          <Box
            sx={{
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "140.1%",
              alignItems: "center",
              textTransform: "capitalize",
              color: "#FFFFFF",
              background: "#4B65B2",
              border: "1px solid #FFFFFF",
              borderRadius: "4px",
              padding: "10px 40px 10px 10px",
            }}
          >
            Carole Demas
          </Box>
          <IconButton aria-label="settings">
            <MoreVertIcon sx={{ color: "#FFF" }} />
          </IconButton>
          <Typography
            sx={{
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "19px",
              color: "#F6F7F8",
              padding: 2,
            }}
          >
            Applicant 1 Name
          </Typography>
          <Box
            sx={{
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "140.1%",
              alignItems: "center",
              textTransform: "capitalize",
              color: "#FFFFFF",
              background: "#4B65B2",
              border: "1px solid #FFFFFF",
              borderRadius: "4px",
              padding: "10px 40px 10px 10px",
            }}
          >
            Carole Demas
          </Box>
          <IconButton aria-label="settings">
            <MoreVertIcon sx={{ color: "#FFF" }} />
          </IconButton>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Table
            sx={{ background: "#EEF7FE", borderRadius: "4px 0px 0px 4px" }}
          >
            <TableBody>
              {rowdata.map((data) => (
                <TableRow
                  key={data.id}
                  sx={{ background: "transparent", boxShadow: "0" }}
                >
                  <TableCell
                    sx={{
                      fontWeight: 400,
                      fontSize: "16px",
                      paddingTop: "30.2px",
                      paddingBottom: "30.2px",
                      // display: "flex",
                      // alignItems: "baseline",
                      color: "#263238",
                    }}
                  >
                    {data.name}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>

        <Grid item xs={3}>
          <Table
            sx={{
              background: "#FFF",
              borderRadius: "4px 0px 0px 4px",
              borderRight: "2px solid rgba(196, 196, 196, 0.4)",
            }}
          >
            <TableBody>
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",

                    // padding: 0.8,
                  }}
                >
                  <InputBoxes
                    // {...register("name")}
                    fullWidth
                    placeholder="Mrs."

                    // error={Boolean(errors?.name)}
                    // helperText={errors.name ? `Name is ${errors.name?.message}` : null}
                  />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <InputBoxes
                    // {...register("name")}
                    fullWidth
                    placeholder="Carole"

                    // error={Boolean(errors?.name)}
                    // helperText={errors.name ? `Name is ${errors.name?.message}` : null}
                  />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <InputBoxes
                    // {...register("name")}
                    fullWidth
                    placeholder="-"

                    // error={Boolean(errors?.name)}
                    // helperText={errors.name ? `Name is ${errors.name?.message}` : null}
                  />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <InputBoxes
                    // {...register("name")}
                    fullWidth
                    placeholder="Demas"

                    // error={Boolean(errors?.name)}
                    // helperText={errors.name ? `Name is ${errors.name?.message}` : null}
                  />
                </TableCell>
              </TableRow>{" "}
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <InputBoxes
                    // {...register("name")}
                    fullWidth
                    placeholder="carole.demas@hotmail.com"

                    // error={Boolean(errors?.name)}
                    // helperText={errors.name ? `Name is ${errors.name?.message}` : null}
                  />
                </TableCell>
              </TableRow>{" "}
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <InputBoxes
                    // {...register("name")}
                    fullWidth
                    placeholder="+41 6744589624"

                    // error={Boolean(errors?.name)}
                    // helperText={errors.name ? `Name is ${errors.name?.message}` : null}
                  />
                </TableCell>
              </TableRow>{" "}
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <InputBoxes
                    // {...register("name")}
                    fullWidth
                    placeholder="02-02-1989"

                    // error={Boolean(errors?.name)}
                    // helperText={errors.name ? `Name is ${errors.name?.message}` : null}
                  />
                </TableCell>
              </TableRow>{" "}
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <InputSelect
                    // {...register("discountApplicable")}
                    fullWidth
                    labelId="demo-simple-InputSelect-helper-label"
                    id="demo-simple-InputSelect-helper"
                    name="category"
                    //  error={Boolean(errors?.discountApplicable)}
                    defaultValue="remortgage"
                  >
                    <MenuItem value="reremortgage">Remortgage</MenuItem>
                    <MenuItem value="remortgage">Remortgage</MenuItem>
                  </InputSelect>
                </TableCell>
              </TableRow>{" "}
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <InputSelect
                    // {...register("discountApplicable")}
                    fullWidth
                    labelId="demo-simple-InputSelect-helper-label"
                    id="demo-simple-InputSelect-helper"
                    name="category"
                    //  error={Boolean(errors?.discountApplicable)}
                    defaultValue="remortgage"
                  >
                    <MenuItem value="reremortgage">Remortgage</MenuItem>
                    <MenuItem value="remortgage">Remortgage</MenuItem>
                  </InputSelect>
                </TableCell>
              </TableRow>{" "}
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <InputSelect
                    // {...register("discountApplicable")}
                    fullWidth
                    labelId="demo-simple-InputSelect-helper-label"
                    id="demo-simple-InputSelect-helper"
                    name="category"
                    //  error={Boolean(errors?.discountApplicable)}
                    defaultValue="remortgage"
                  >
                    <MenuItem value="reremortgage">Remortgage</MenuItem>
                    <MenuItem value="remortgage">Remortgage</MenuItem>
                  </InputSelect>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <InputSelect
                    // {...register("discountApplicable")}
                    fullWidth
                    labelId="demo-simple-InputSelect-helper-label"
                    id="demo-simple-InputSelect-helper"
                    name="category"
                    //  error={Boolean(errors?.discountApplicable)}
                    defaultValue="remortgage"
                  >
                    <MenuItem value="reremortgage">Remortgage</MenuItem>
                    <MenuItem value="remortgage">Remortgage</MenuItem>
                  </InputSelect>
                </TableCell>
              </TableRow>{" "}
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <InputBoxes
                    // {...register("name")}
                    fullWidth
                    placeholder="£ 20000"

                    // error={Boolean(errors?.name)}
                    // helperText={errors.name ? `Name is ${errors.name?.message}` : null}
                  />
                </TableCell>
              </TableRow>{" "}
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <Grid
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography>27 Old Gloucester Street</Typography>
                    <Button
                      sx={{
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "19px",

                        textTransform: "lowercase",
                        color: "#4B65B2",
                      }}
                    >
                      view more
                    </Button>
                  </Grid>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <Grid
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography>Occupation name1</Typography>
                    <Button
                      sx={{
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "19px",

                        textTransform: "lowercase",
                        color: "#4B65B2",
                      }}
                    >
                      view more
                    </Button>
                  </Grid>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <Grid
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography> £ 4850.00</Typography>
                    <Button
                      sx={{
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "19px",

                        textTransform: "lowercase",
                        color: "#4B65B2",
                      }}
                    >
                      view more
                    </Button>
                  </Grid>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <Grid
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography>2</Typography>
                    <Button
                      sx={{
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "19px",

                        textTransform: "lowercase",
                        color: "#4B65B2",
                      }}
                    >
                      view more
                    </Button>
                  </Grid>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>

        <Grid item xs={3}>
          <Table
            sx={{
              background: "#FFF",
              borderRadius: "4px 0px 0px 4px",
              borderRight: "2px solid rgba(196, 196, 196, 0.4)",
            }}
          >
            <TableBody>
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",

                    // padding: 0.8,
                  }}
                >
                  <InputBoxes
                    // {...register("name")}
                    fullWidth
                    placeholder="Mrs."

                    // error={Boolean(errors?.name)}
                    // helperText={errors.name ? `Name is ${errors.name?.message}` : null}
                  />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <InputBoxes
                    // {...register("name")}
                    fullWidth
                    placeholder="Carole"

                    // error={Boolean(errors?.name)}
                    // helperText={errors.name ? `Name is ${errors.name?.message}` : null}
                  />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <InputBoxes
                    // {...register("name")}
                    fullWidth
                    placeholder="-"

                    // error={Boolean(errors?.name)}
                    // helperText={errors.name ? `Name is ${errors.name?.message}` : null}
                  />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <InputBoxes
                    // {...register("name")}
                    fullWidth
                    placeholder="Demas"

                    // error={Boolean(errors?.name)}
                    // helperText={errors.name ? `Name is ${errors.name?.message}` : null}
                  />
                </TableCell>
              </TableRow>{" "}
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <InputBoxes
                    // {...register("name")}
                    fullWidth
                    placeholder="carole.demas@hotmail.com"

                    // error={Boolean(errors?.name)}
                    // helperText={errors.name ? `Name is ${errors.name?.message}` : null}
                  />
                </TableCell>
              </TableRow>{" "}
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <InputBoxes
                    // {...register("name")}
                    fullWidth
                    placeholder="+41 6744589624"

                    // error={Boolean(errors?.name)}
                    // helperText={errors.name ? `Name is ${errors.name?.message}` : null}
                  />
                </TableCell>
              </TableRow>{" "}
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <InputBoxes
                    // {...register("name")}
                    fullWidth
                    placeholder="02-02-1989"

                    // error={Boolean(errors?.name)}
                    // helperText={errors.name ? `Name is ${errors.name?.message}` : null}
                  />
                </TableCell>
              </TableRow>{" "}
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <InputSelect
                    // {...register("discountApplicable")}
                    fullWidth
                    labelId="demo-simple-InputSelect-helper-label"
                    id="demo-simple-InputSelect-helper"
                    name="category"
                    //  error={Boolean(errors?.discountApplicable)}
                    defaultValue="remortgage"
                  >
                    <MenuItem value="reremortgage">Remortgage</MenuItem>
                    <MenuItem value="remortgage">Remortgage</MenuItem>
                  </InputSelect>
                </TableCell>
              </TableRow>{" "}
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <InputSelect
                    // {...register("discountApplicable")}
                    fullWidth
                    labelId="demo-simple-InputSelect-helper-label"
                    id="demo-simple-InputSelect-helper"
                    name="category"
                    //  error={Boolean(errors?.discountApplicable)}
                    defaultValue="remortgage"
                  >
                    <MenuItem value="reremortgage">Remortgage</MenuItem>
                    <MenuItem value="remortgage">Remortgage</MenuItem>
                  </InputSelect>
                </TableCell>
              </TableRow>{" "}
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <InputSelect
                    // {...register("discountApplicable")}
                    fullWidth
                    labelId="demo-simple-InputSelect-helper-label"
                    id="demo-simple-InputSelect-helper"
                    name="category"
                    //  error={Boolean(errors?.discountApplicable)}
                    defaultValue="remortgage"
                  >
                    <MenuItem value="reremortgage">Remortgage</MenuItem>
                    <MenuItem value="remortgage">Remortgage</MenuItem>
                  </InputSelect>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <InputSelect
                    // {...register("discountApplicable")}
                    fullWidth
                    labelId="demo-simple-InputSelect-helper-label"
                    id="demo-simple-InputSelect-helper"
                    name="category"
                    //  error={Boolean(errors?.discountApplicable)}
                    defaultValue="remortgage"
                  >
                    <MenuItem value="reremortgage">Remortgage</MenuItem>
                    <MenuItem value="remortgage">Remortgage</MenuItem>
                  </InputSelect>
                </TableCell>
              </TableRow>{" "}
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <InputBoxes
                    // {...register("name")}
                    fullWidth
                    placeholder="£ 20000"

                    // error={Boolean(errors?.name)}
                    // helperText={errors.name ? `Name is ${errors.name?.message}` : null}
                  />
                </TableCell>
              </TableRow>{" "}
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <Grid
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography>27 Old Gloucester Street</Typography>
                    <Button
                      sx={{
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "19px",

                        textTransform: "lowercase",
                        color: "#4B65B2",
                      }}
                    >
                      view more
                    </Button>
                  </Grid>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <Grid
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography>Occupation name1</Typography>
                    <Button
                      sx={{
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "19px",

                        textTransform: "lowercase",
                        color: "#4B65B2",
                      }}
                    >
                      view more
                    </Button>
                  </Grid>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <Grid
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography> £ 4850.00</Typography>
                    <Button
                      sx={{
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "19px",

                        textTransform: "lowercase",
                        color: "#4B65B2",
                      }}
                    >
                      view more
                    </Button>
                  </Grid>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  background: "transparent",
                  boxShadow: "0",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "2px dashed rgba(151, 151, 151, 0.24)",
                  }}
                >
                  <Grid
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography>2</Typography>
                    <Button
                      sx={{
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "19px",

                        textTransform: "lowercase",
                        color: "#4B65B2",
                      }}
                    >
                      view more
                    </Button>
                  </Grid>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Box>
  );
};

PersonalDetailsTab.propTypes = {
  cases: PropTypes.array.isRequired,
};

PersonalDetailsTab.defaultProps = {
  cases: [],
};

export default PersonalDetailsTab;
