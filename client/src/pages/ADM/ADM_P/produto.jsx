import'./produto.css'
import Sidebar from '../../../components/SideBar/SideBar';
function AdminC (){
    return(
        <>
        <Sidebar/>
        <div id="C">
                <Sidebar />
                <div id='BodyC'>
                    <div id="Tcerimonialista">
                        <h1>Prodtuos</h1>
                    </div>
                    <div id="Ctabela">
                        <table id='cerimonialista'>
                            <td>Nome</td>
                            <td>Preço:</td>
                            <td>Quantidade</td>

                        </table>

                    </div>

                </div>

            </div>

    
        </>
    )

}
export default AdminC