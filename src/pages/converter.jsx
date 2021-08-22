import Converter from "../components/converter"
import Layout from '../components/layout'

export default function ConverterPage() {
    return (
        <Layout>
            <Converter vlr_real={1} vlr_dolar={5.36}></Converter>
        </Layout>        
    )
}