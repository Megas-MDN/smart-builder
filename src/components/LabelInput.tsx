import {
  FormControl,
  FormHelperText,
  InputAdornment,
  SxProps,
  TextField,
} from "@mui/material";

export interface IPropsLabelInput {
  label?: string;
  placeholder?: string;
  fixedUnits?: string;
  containerSx?: SxProps;
  labelSx?: SxProps;
  inputSx?: SxProps;
  value?: string | number;
  onChange?: (value: string) => void;
}

export const LabelInput = ({
  label = "Rendimento:",
  placeholder = "digite o valor",
  fixedUnits = "m²",
  onChange = () => {},
  value = "",
  containerSx = {},
  labelSx = {},
  inputSx = {},
}: IPropsLabelInput) => {
  return (
    <FormControl
      sx={{
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: "0 12px",
        ...containerSx,
      }}
    >
      <FormHelperText
        id={`outlined-${label}-helper-text`}
        sx={{
          fontSize: "18px",
          fontWeight: "500",
          minWidth: "30%",
          ...labelSx,
        }}
      >
        {label}
      </FormHelperText>
      <TextField
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="number"
        sx={{
          backgroundColor: "#FAFAFA",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
            "&:hover fieldset": {
              border: "none",
            },
            "&.Mui-focused fieldset": {
              border: "none",
            },
          },
          ".MuiInputBase-input": {
            padding: "4px 8px",
            paddingLeft: "16px",
          },
          ...inputSx,
        }}
        id={`outlined-adornment-${label}`}
        placeholder={placeholder}
        aria-describedby={`"outlined-${label}-helper-text"`}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">{fixedUnits}</InputAdornment>
            ),
            sx: {
              fontSize: "16px",
              outline: "none",
              border: "none",
              fontWeight: "500",
            },
          },
        }}
      />
    </FormControl>
  );
};
