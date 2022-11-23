export { Serial };

class Slave {
    slave_id: number;
    unsigned = true;
    constructor(slave_id: number, unsigned = true) {
        this.slave_id = slave_id;
        this.unsigned = unsigned;
    }
}

enum BlockType {
    COILS,
    DISCRETE_INPUTS,
    HOLDING_REGISTERS,
    ANALOG_INPUTS
}

class Block {
    name: string;
    type: BlockType;
    starting_address: number;
    size: number;
    constructor(name: string, type: BlockType, starting_address: number,
        size: number) {
        this.name = name;
        this.type = type;
        this.starting_address = starting_address;
        this.size = size;
    }
}

class Databank {
    // the map of slaves by ids
    slaves = new Map<number, Slave>();

    add_slave = (slave_id: number, unsigned = true) => {
        this.slaves.set(slave_id,
            new Slave(slave_id, unsigned));
    };
    get_slave = (slave_id: number) => {
        return this.slaves.get(slave_id);
    };
    remove_slave = (slave_id: number) => {
        return this.slaves.delete(slave_id);
    };
    remove_all_slaves = () => {
        return this.slaves.clear();
    };
}

class Server {
    name: string;
    databank: Databank;
    error_on_missing_slave = true;
}

class TcpServer extends Server {
    port = 502;
    address = '';
    timeout_in_sec = 1;
}
const BAUDRATES = [50, 75, 110, 134, 150, 200, 300, 600, 1200, 1800, 2400, 4800,
    9600, 19200, 38400, 57600, 115200, 230400, 460800, 500000,
    576000, 921600, 1000000, 1152000, 1500000, 2000000, 2500000,
    3000000, 3500000, 4000000]

enum PARITY {
    NONE = 'N',
    EVEN = 'E',
    ODD = 'O',
    MARK = 'M',
    SPACE = 'S'
}
enum STOPBITS {
    ONE = 1,
    ONE_POINT_FIVE = 1.5,
    TWO = 2
}
enum SIZEBITS {
    FIVEBITS = 5,
    SIXBITS,
    SEVENBITS,
    EIGHTBITS
}

enum PARITY_NAMES {
    NONE = 'None',
    EVEN = 'Even',
    ODD = 'Odd',
    MARK = 'Mark',
    SPACE = 'Space',
}

class Serial {
    port;
    baudrate = 9600;
    bytesize = SIZEBITS.EIGHTBITS;
    parity = PARITY.NONE;
    stopbits = STOPBITS.ONE;
    timeout: number;
    xonxoff = false;
    rtscts = false;
    write_timeout: number;
    dsrdtr = false;
    inter_byte_timeout: number;
    exclusive;

    constructor(json) {
        for (var prop in json) {
            if (json.hasOwnProperty(prop)) {
                this[prop] = json[prop];
            }
        }
    }
}

class RtuServer extends Server {
    serial: Serial;
}