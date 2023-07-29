import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
} from '@material-tailwind/react';

interface ISeventhSectionProp {
  zipCode?: string | undefined;
  street?: string | undefined;
  number?: string | undefined;
  complement?: string | undefined;
  city?: string | undefined;
  state?: string | undefined;
  mainColor?: string | undefined;
  secondaryColor?: string | undefined;
  neightborhood?: string | undefined;
}

function AddressCard({
    mainColor,
    secondaryColor,
    neightborhood,
    zipCode,
    street,
    number,
    city,
    state,
    complement,
}: ISeventhSectionProp) {
    return (
        <section className="py-28 px-4 bg-white flex items-center justify-center">
            <Card className="w-1/2">
                <CardHeader
                    variant="gradient"
                    color="blue"
                    className="mb-4 grid py-4 place-items-center"
                >
                    <Typography variant="h3" color="white">
            Endereço
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <Typography variant="p" color="black">
                        {street}, {neightborhood}, {number}, {complement}
                        <br />
                        {city}/{state}{' '}
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button variant="gradient" fullWidth>
            Copiar endereço
                    </Button>
                </CardFooter>
            </Card>
        </section>
    );
}

export { AddressCard };
