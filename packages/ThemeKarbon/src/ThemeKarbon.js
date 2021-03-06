import Text from './Components/Text.scss'
import Toast from './Components/Toast.scss'
import Button from './Components/Button.scss'
import TabView from './Components/TabView.scss'
import Textarea from './Components/Textarea.scss'
import TextField from './Components/TextField.scss'

export const theme = {
  Text: () => Text,
  Toast: () => Toast,
  Button: () => Button,
  TabView: () => TabView,
  Textarea: () => Textarea,
  TextField: () => TextField
}
