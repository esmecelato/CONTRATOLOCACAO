document.getElementById("contractGenerator").addEventListener("submit", function(event) {
    event.preventDefault();

    const contrato = `
        <h2>Contrato de Locação</h2>
        <p><strong>Locador:</strong> ${ownerName.value}, ${nationality.value}, ${maritalStatus.value}, ${occupation.value}, RG ${rgNumber.value}, CPF ${cpfNumber.value}, residente em ${propertyAddressFull.value}.</p>
        <p><strong>Locatário:</strong> ${tenantName.value}, ${tenantNationality.value}, ${tenantMaritalStatus.value}, ${tenantOccupation.value}, RG ${tenantRg.value}, CPF ${tenantCpf.value}.</p>
        <p><strong>Imóvel:</strong> Tipo: ${propertyType.value}, localizado em ${propertyAddressFullImovel.value}.</p>
        <p><strong>Aluguel:</strong> R$ ${rentalValue.value} (${rentalValueText.value}), com início em ${startDate.value}, término em ${endDate.value}, caução de ${securityDeposit.value}, reajuste ${reajuste.value}.</p>
        <p><strong>Data da Assinatura:</strong> ${signatureDate.value}.</p>
        <p>Assinaturas:</p>
        <p>__________________________<br>Locador</p>
        <p>__________________________<br>Locatário</p>
    `;

    document.getElementById("generatedContract").innerHTML = contrato;
});
