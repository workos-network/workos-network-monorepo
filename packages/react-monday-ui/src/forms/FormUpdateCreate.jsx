/* --- Global --- */
import { PropTypes } from "prop-types";
import { useForm } from "react-hook-form";
import { withMonday } from "react-monday";
import { Box } from "theme-ui";

/**
 * @name FormUpdateCreate
 * @description Set authorization token for Monday Queries.
 * @version 0.0.0
 */

export const FormUpdateCreate = ({ updateDefault, sx, ...props }) => {
  /* --- Form Hook State --- */
  const monday = withMonday();
  const { handleSubmit, register, errors, setValue, formState } = useForm();

  React.useEffect(() => {
    if (monday.token) {
      setValue("token", monday.token);
    }
  }, []);

  /* --- Submit Handler --- */
  const onSubmit = async (values) => {
    if (values) {
      monday.setToken(values.token);
    }
  };

  /* --- Form : Component --- */
  return (
    <Box
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        border: 1,
        borderColor: "solitude",
        borderStyle: "solid",
        borderRadius: 4,
        flex: 1,
        mt: 2,
        alignItems: "center",
        alignContent: "center",
        padding: 1,
        // width: "100%",
        "&:focus": {
          borderColor: "charcoal",
        },
      }}
    >
      <Box
        as="textarea"
        name="update"
        placeholder="Update"
        ref={register({ required: true })}
        errors={errors}
        sx={{
          border: "none",
          minHeight: 50,
          flex: 1,
        }}
      />
      <span>
        <Box as="button" sx={{ bg: "blue", color: "white", ml: 3 }}>
          <Box>{props.label}</Box>
        </Box>
      </span>
    </Box>
  );
};

FormUpdateCreate.defaultProps = {
  sx: {},
  label: "Update",
  labelLoading: "Loading...",
  labelComplete: "Complete",
};

FormUpdateCreate.propTypes = {
  sx: PropTypes.object,
};

export default FormUpdateCreate;
