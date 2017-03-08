<?php
#Versão com ajax
if (isset($_GET['TipoPagamento'])) {
    $TipoPagamentoSelecionado = $_GET['TipoPagamento'];
    sleep(1);
    if ($TipoPagamentoSelecionado == "cheque") {
        ?>
        <div class="form-group col-md-2">
            <label for="ComprovantePagamento"><abbr title="Identifique o cheque para acompanhamento">Identificação :</abbr></label>
            <input type="text" name="ComprovantePagamento" class="form-control">
        </div>
        <div class="col-md-8 col-md-push-2">
            <div class="form-group">
                <label for="Banco">Banco: </label>
                <input type="text" name="BancoCheque" id="Banco" placeholder="Digite o nome do Banco do cheque" class="form-control">
            </div>
            <div class="form-group">
                <label for="Agencia">Agência: </label>
                <input type="text" name="AgenciaCheque" id="Agencia" placeholder="Digite o número da agência" class="form-control">
            </div>
            <div class="form-group">
                <label for="Cheque">Número do Cheque: </label>
                <input type="text" name="NumeroCheque" id="Cheque" placeholder="Digite o número do cheque" class="form-control">
            </div>
            <div class="form-group">
                <label for="Proprietario">Proprietário do Cheque: </label>
                <input type="text" name="ProprietarioCheque" id="Cheque" placeholder="Digite o nome do proprietário do cheque" class="form-control">
            </div>
            <div class="form-group">
                <label for="Destino">Destino: </label>
                <input type="text" name="DestinoCheque" id="Destinho" placeholder="Digite o destino do cheque" class="form-control">
            </div>
        </div>
        <?php
    } else {
        ?>
        <div class="form-group col-md-2">
            <label for="ComprovantePagamento"><abbr title="Ou Número do Recibo">Comprovante:</abbr></label>
            <input type="text" name="ComprovantePagamento" class="form-control">
        </div>
        <?php
    }
} else {
    ?>
    <img src="img/img1.png" class="img-responsive img-circle">
    <?php
}
