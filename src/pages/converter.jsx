import ConverterComponent from "../components/converter"
import Layout from '../components/layout'

export default function ConverterPage() {
    return (
        <Layout>
            <ConverterComponent vlr_real={1} vlr_dolar={5.36}></ConverterComponent>
        </Layout>        
    )
}