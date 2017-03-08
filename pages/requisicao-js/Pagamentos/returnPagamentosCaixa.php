<?php
#Versão com ajax
if (isset($_GET['MesSelecionado'])) {
    include '../../../cnf/config.php';
    $MesEscolhido = $_GET['MesSelecionado'];
    switch ($MesEscolhido) {
        case '01': $MesDefinido = "financeiro_janeiro";
            break;
        case '02': $MesDefinido = "financeiro_fevereiro";
            break;
        case '03': $MesDefinido = "financeiro_marco";
            break;
        case '04': $MesDefinido = "financeiro_abril";
            break;
        case '05': $MesDefinido = "financeiro_maio";
            break;
        case '06': $MesDefinido = "financeiro_junho";
            break;
        case '07': $MesDefinido = "financeiro_julho";
            break;
        case '08': $MesDefinido = "financeiro_agosto";
            break;
        case '09': $MesDefinido = "financeiro_setembro";
            break;
        case '10': $MesDefinido = "financeiro_outubro";
            break;
        case '11': $MesDefinido = "financeiro_novembro";
            break;
        case '12': $MesDefinido = "financeiro_dezembro";
            break;
    }
    sleep(1);
    ?>
    <table class="table-responsive table-striped text-center" style="width: 100%">
        <tr>
            <td>Dia</td>
            <td>Valor</td>
        </tr>
        <?php
        $BuscarPagamentosDoMes = mysql_query("SELECT dia_pagamento FROM $MesDefinido GROUP BY dia_pagamento ORDER BY dia_pagamento ASC");
        if ($BuscarPagamentosDoMes) {
            while ($ReturnPagamentosMes = mysql_fetch_assoc($BuscarPagamentosDoMes)) {
                ?>
                <tr>
                    <td class="text-center"><?php echo $DiaPagamento = $ReturnPagamentosMes['dia_pagamento']; ?></td>
                    <td class="text-center">
                        <?php
                        $BuscarPagamentosDoMesValores = mysql_query("SELECT sum(valor_pago) AS total FROM $MesDefinido WHERE dia_pagamento = $DiaPagamento GROUP BY dia_pagamento ORDER BY dia_pagamento ASC");
                        while ($ReturnTotal = mysql_fetch_assoc($BuscarPagamentosDoMesValores)) {
                            echo "R$ " . trata_preco($ReturnTotal['total']);

                            $SomarTotal = mysql_query("SELECT sum(valor_pago) AS total_soma FROM $MesDefinido");
                            if ($SomarTotal) {
                                while ($ReturnTotalMes = mysql_fetch_assoc($SomarTotal)) {
                                    $_SESSION['TotalPagamentosMes'] = $ReturnTotalMes['total_soma'];
                                    $ExibirTotal = $_SESSION['TotalPagamentosMes'];
                                }
                            }
                        }
                        ?>
                    </td>
                </tr>
                <?php
            }
        } else {
            echo "Erro ao buscar os pagamentos do mês de $MesDefinido. " . mysql_error();
        }
        ?>
        <tr>
            <td colspan="1">
                <span>Total: </span>
            </td>
            <td colspan="">
                <span>
                    <?php
                    if (!empty($ExibirTotal)) {
                        echo "R$ " . trata_preco($ExibirTotal);
                    } else {
                        $Total = 0;
                        echo "R$ " . trata_preco($Total);
                    }
                    ?>
                </span>
            </td>
        </tr>
    </table>
    <?php
}