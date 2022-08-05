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


OK so I also leanred a bit more about class components I have used it before but it was confusing in the beginning this.set state is eqal to useState

componentdidMount is equal to useEffect but only if it has [], use effect runs after the component is rendered so the empty array...
