FILES END .tsx
npx create-react-app typescript-app --template typescript

PROPS
    1. type propname = {
        define prop type (string, object, boolean)
    }
<!-- Object ={

}[ ]  -->ui
    (props:propname)

optional props
    define prop ?:
    or (null!)

typescript inference allows us to not always specify the type, but only if it's neccessary because it can't itself.

<option | null>(null)
<HtMLDOM>(null)
