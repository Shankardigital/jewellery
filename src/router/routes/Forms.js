import { lazy } from 'react'

const Wizard = lazy(() => import('../../views/forms/wizard'))
const Validation = lazy(() => import('../../views/forms/validation'))
const FormLayouts = lazy(() => import('../../views/forms/form-layouts'))
const Employeelist = lazy(() => import('../../views/forms/form-layouts/Employeelist'))
const Roles = lazy(() => import('../../views/forms/form-layouts/Roles'))
const Department = lazy(() => import('../../views/forms/form-layouts/Department'))
const Editemp = lazy(() => import('../../views/forms/form-layouts/Editemp'))
const Radio = lazy(() => import('../../views/forms/form-elements/radio'))
const Editorder = lazy(() => import('../../views/forms/form-elements/radio/Editorder'))
const Orderlist = lazy(() => import('../../views/forms/form-elements/radio/Orderlist'))
const Input = lazy(() => import('../../views/forms/form-elements/input'))
const FormRepeater = lazy(() => import('../../views/forms/form-repeater'))
const Switch = lazy(() => import('../../views/forms/form-elements/switch'))
const Editor = lazy(() => import('../../views/forms/form-elements/editor'))
const Select = lazy(() => import('../../views/forms/form-elements/select'))
const Textarea = lazy(() => import('../../views/forms/form-elements/textarea'))
const InputMask = lazy(() => import('../../views/forms/form-elements/input-mask'))
const Checkboxes = lazy(() => import('../../views/forms/form-elements/checkboxes'))
const Customerlist = lazy(() => import('../../views/forms/form-elements/checkboxes/Customerlist'))
const Partyamount = lazy(() => import('../../views/forms/form-elements/checkboxes/Partyamount'))
const Editcust = lazy(() => import('../../views/forms/form-elements/checkboxes/Editcust'))
const Datepickers = lazy(() => import('../../views/forms/form-elements/datepicker'))
const InputGroups = lazy(() => import('../../views/forms/form-elements/input-groups'))
const NumberInput = lazy(() => import('../../views/forms/form-elements/number-input'))
const FileUploader = lazy(() => import('../../views/forms/form-elements/file-uploader'))

const FormRoutes = [
  {
    element: <Input />,
    path: '/forms/elements/input'
  },
  {
    element: <InputGroups />,
    path: '/forms/elements/input-group'
  },
  {
    element: <InputMask />,
    path: '/forms/elements/input-mask'
  },
  {
    element: <Textarea />,
    path: '/forms/elements/textarea'
  },
  {
    element: <Checkboxes />,
    path: '/forms/elements/checkbox'
  },
  {
    element: <Customerlist />,
    path: '/customer-list'
  },
  {
    element: <Partyamount />,
    path: '/partyamount'
  },
  {
    element: <Editcust />,
    path: '/editcust'
  },
  {
    element: <Radio />,
    path: '/forms/elements/radio'
  },
  {
    element: <Orderlist />,
    path: '/orderlist'
  },
  {
    element: <Editorder />,
    path: '/editorder'
  },
  {
    element: <Switch />,
    path: '/forms/elements/switch'
  },
  {
    element: <Select />,
    path: '/forms/elements/select'
  },
  {
    element: <NumberInput />,
    path: '/forms/elements/number-input'
  },
  {
    element: <FileUploader />,
    path: '/forms/elements/file-uploader'
  },
  {
    element: <Editor />,
    path: '/forms/elements/editor'
  },
  {
    element: <Datepickers />,
    path: '/forms/elements/pickers'
  },
  {
    element: <FormLayouts />,
    path: '/forms/layout/form-layout'
  },
  {
    element: <Employeelist />,
    path: '/employeelist'
  },
  {
    element: <Roles />,
    path: '/roles'
  },
  {
    element: <Editemp />,
    path: '/edit-emp'
  },
  {
    element: <Department />,
    path: '/departments'
  },
  {
    element: <Wizard />,
    path: '/forms/wizard'
  },
  {
    element: <Validation />,
    path: '/forms/form-validation'
  },
  {
    element: <FormRepeater />,
    path: '/forms/form-repeater'
  }
]

export default FormRoutes
