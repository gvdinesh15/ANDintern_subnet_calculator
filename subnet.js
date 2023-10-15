function calculateSubnet() {
    const ipAddress = document.getElementById('ipAddress').value;
    const subnetMask = document.getElementById('subnetMask').value;

    // Convert the IP and Subnet Mask to binary
    const ipBinary = ipAddress.split('.').map(part => parseInt(part).toString(2).padStart(8, '0')).join('');
    const maskBinary = subnetMask.split('.').map(part => parseInt(part).toString(2).padStart(8, '0')).join('');

    // Calculate the Network Address
    const networkAddressBinary = ipBinary.slice(0, maskBinary.indexOf('0'));
    const networkAddress = parseInt(networkAddressBinary, 2).toString(10);

    // Calculate the Broadcast Address
    const invertedMaskBinary = maskBinary.split('').map(bit => (bit === '0' ? '1' : '0')).join('');
    const broadcastAddressBinary = ipBinary.slice(0, invertedMaskBinary.indexOf('1'));
    const broadcastAddress = parseInt(broadcastAddressBinary, 2).toString(10);

    // Calculate the First Host
    const firstHostBinary = networkAddressBinary.slice(0, networkAddressBinary.length - 1) + '1';
    const firstHost = parseInt(firstHostBinary, 2).toString(10);

    // Calculate the Last Host
    const lastHostBinary = broadcastAddressBinary.slice(0, broadcastAddressBinary.length - 1) + '1';
    const lastHost = parseInt(lastHostBinary, 2).toString(10);

    // Calculate Available Hosts
    const availableHosts = broadcastAddress - networkAddress - 1;

    // Update the HTML with the results
    document.getElementById('networkAddress').textContent = networkAddress;
    document.getElementById('firstHost').textContent = firstHost;
    document.getElementById('lastHost').textContent = lastHost;
    document.getElementById('broadcastAddress').textContent = broadcastAddress;
    document.getElementById('availableHosts').textContent = availableHosts;
}
