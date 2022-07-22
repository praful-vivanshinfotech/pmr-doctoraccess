import { alpha, styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { Box } from '@mui/material'
import { isNullable } from '@/helper/isNullable'
const CstFormControl = styled(FormControl)(({ theme, props }) => {
  return {
    marginBottom: '20px',
    label: {
      color: theme.palette.gray900,
      transform: 'none',
      fontSize: 14,
      fontWeight: 500,
      '&.Mui-focused': {
        color: theme.palette.gray900,
      },
    },
    '.MuiInputBase-root': {
      marginTop: theme.spacing(4),
    },
    '.MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.white,
      border: `1px solid ${
        isNullable(props.form?.formState?.errors[props.name]?.message)
          ? theme.palette.gray200
          : theme.palette.error.main
      }`,
      fontSize: 16,
      width: '100%',
      padding: theme.spacing(2),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }
})

export const CstInput = (props) => {
  const { label, error, id, name, test, form, ...rest } = props
  return (
    <CstFormControl props={props} variant="standard" fullWidth={true}>
      <InputLabel htmlFor={id} shrink>
        {label}
      </InputLabel>
      <InputBase {...rest} id={id} name={name} {...form?.register(name)} />
      {!isNullable(form?.formState?.errors[props.name]?.message) && (
        <Box
          display="flex"
          alignItems="center"
          py={1}
          sx={{
            color: 'error.main',
          }}
        >
          <InfoOutlinedIcon
            sx={{
              mr: '4px',
            }}
          ></InfoOutlinedIcon>
          {form?.formState?.errors[props.name]?.message}
        </Box>
      )}
    </CstFormControl>
  )
}
