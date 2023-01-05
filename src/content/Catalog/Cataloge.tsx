import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import {
  Button,
  Card,
  CardHeader,
  Divider,
  Grid,
  InputAdornment,
  TextField,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useGetALLCatalogue } from "@/hooks/catalogue/useCatalogue";

import Label from "@/components/Label";

import { AgentFieldStatus, AgentStatus } from "@/models/agentStatus";

import CatalogueRow from "./CatalogueRow";

// const CustomTableCell = styled()(
//   () => `

//     color: #FFFFFF;
// `
// );

interface Filters {
  status?: AgentFieldStatus;
}

export interface Catalogue {
  discountApplicable: boolean;
  images: string[];
  _id: string;
  catalogue: string;
  status: AgentFieldStatus;
  price: number;
  color: string;
  category: string;
  name: string;
  finalPrice: number;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

const getStatusLabel = (AgentFieldStatus: AgentFieldStatus): JSX.Element => {
  const map = {
    active: {
      text: "Active",
      color: "success",
    },
    inactive: {
      text: "In-active",
      color: "warning",
    },
  };

  const { text, color }: any = map[AgentFieldStatus];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (
  agentStatuss: AgentStatus[],
  filters: Filters
): AgentStatus[] => {
  return agentStatuss.filter((AgentStatus) => {
    let matches = true;

    if (filters.status && AgentStatus.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const Catalog = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const [query, setQuery] = useState<any>({});
  const router = useRouter();
  const [catalogue, setCatalogue] = useState<Catalogue[]>([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const getALLCatalogueHook = useGetALLCatalogue();

  const getALLCatalogue = async () => {
    const res: any = await getALLCatalogueHook.mutateAsync({
      query: query,
    });

    if (res?.status === "success") {
      console.log(res);
      setCatalogue(res?.allCatalogue);
    }
  };

  useEffect(() => {
    getALLCatalogue();
  }, [query]);

  return (
    <>
      <Card
        sx={{
          background: "#FFF",
          borderRadius: 1,
          boxShadow: "0px 2px 5px 0px rgb(58 53 65 / 10%)",
        }}
      >
        <CardHeader
          action={
            <Grid container>
              <Grid item>
                <TextField
                  size="small"
                  onChange={(event) => {
                    if (event.target.value) {
                      setQuery((prev) => ({
                        ...prev,
                        name: event.target.value,
                      }));
                    } else {
                      setQuery((prev) => ({
                        ...Object.keys(prev)
                          .filter((key) => key !== "name")
                          .reduce(
                            (prev, curr) => ({ ...prev, [curr]: query[curr] }),
                            {}
                          ),
                      }));
                    }
                  }}
                  placeholder="Search Catalog"
                  sx={{
                    marginRight: 1,
                    borderRadius: 7,
                    background: "#F8F9FB",
                    alignItems: "center",
                    outlineColor: "#F8F9FB",
                    p: 0,
                  }}
                  //helperText='Some important text'
                  variant="outlined"
                  InputProps={{
                    style: { paddingRight: 0, borderRadius: 0 },
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchTwoToneIcon
                          sx={{ color: theme.palette.grey[500] }}
                        />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{ m: 0, p: 0 }}
                        style={{ margin: 0, padding: 0 }}
                      >
                        <Button
                          variant="contained"
                          fullWidth
                          sx={{
                            background: "#122917",
                            height: 36,
                            color: "white",
                            margin: 0,
                            borderRadius: 0,
                            borderTopRightRadius: 7,
                            borderBottomRightRadius: 7,
                          }}
                        >
                          Search
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item>
                <Button
                  sx={{ height: 36 }}
                  variant="contained"
                  size="small"
                  onClick={() => {
                    router?.push("/catalogue/add");
                  }}
                >
                  Add Catalogue
                </Button>
              </Grid>
            </Grid>
          }
          title={`Total Catalogue: ${catalogue?.length || "0"}`}
        />
        <Divider />
      </Card>

      <Grid container spacing={2} marginY={2}>
        {catalogue?.map((catalogue: Catalogue) => (
          <CatalogueRow catalogue={catalogue} key={catalogue?._id} />
        ))}
      </Grid>
    </>
  );
};

export default Catalog;
