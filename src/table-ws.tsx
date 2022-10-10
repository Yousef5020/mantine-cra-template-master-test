import { useState } from 'react';
import {
    createStyles,
    Table,
    ScrollArea,
    UnstyledButton,
    Group,
    Text,
    Center,
    TextInput,
    Container,
} from '@mantine/core';
import { keys } from '@mantine/utils';
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
    th: {
        padding: '0 !important',
    },
    header: {
        position: 'sticky',
        top: 0,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        transition: 'box-shadow 150ms ease',

        '&::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]
                }`,

        },

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
            position: 'absolute',
        },
    },

    scrolled: {
        boxShadow: theme.shadows.sm,
    },

    control: {
        width: '100%',
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },

    icon: {
        width: 21,
        height: 21,
        borderRadius: 21,
    },

    tr: {
        [theme.fn.smallerThan('sm')]: {
            borderBottom: '3px solid #ddd',
            display: 'block',
            marginBottom: '.625em',
        },
    },

    td: {
        [theme.fn.smallerThan('sm')]: {
            display: 'block',
            textAlign: 'right',

            '&::before': {
                content: 'attr(data-label)',
                float: 'left',
                fontWeight: 'bold',
            },
        },
    },
}));

interface ThProps {
    children: React.ReactNode;
    reversed: boolean;
    sorted: boolean;
    onSort(): void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
    const { classes } = useStyles();
    const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
    return (
        <th className={classes.th}>
            <UnstyledButton onClick={onSort} className={classes.control}>
                <Group position="apart">
                    <Text weight={500} size="sm">
                        {children}
                    </Text>
                    <Center className={classes.icon}>
                        <Icon size={14} stroke={1.5} />
                    </Center>
                </Group>
            </UnstyledButton>
        </th>
    );
}

function filterData(data: any[], search: string) {
    const query = search.toLowerCase().trim();
    return data.filter((item) =>
        keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
    );
}

function sortData(
    data: any[],
    payload: { sortBy: keyof any | null; reversed: boolean; search: string }
) {
    const { sortBy } = payload;

    if (!sortBy) {
        return filterData(data, payload.search);
    }

    return filterData(
        [...data].sort((a, b) => {
            if (payload.reversed) {
                return b[sortBy].localeCompare(a[sortBy]);
            }

            return a[sortBy].localeCompare(b[sortBy]);
        }),
        payload.search
    );
}

export function TableSort(data: any) {
    const [search, setSearch] = useState('');
    const { classes, cx } = useStyles();
    const [scrolled, setScrolled] = useState(false);
    const [sortedData, setSortedData] = useState(data.data);
    const [sortBy, setSortBy] = useState<keyof any | null>(null);
    const [reverseSortDirection, setReverseSortDirection] = useState(false);

    const setSorting = (field: keyof any) => {
        const reversed = field === sortBy ? !reverseSortDirection : false;
        setReverseSortDirection(reversed);
        setSortBy(field);
        setSortedData(sortData(data.data, { sortBy: field, reversed, search }));
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSearch(value);
        setSortedData(sortData(data.data, { sortBy, reversed: reverseSortDirection, search: value }));
    };

    const rows = sortedData.map((row: any) => (
        <tr className={cx(classes.tr)} key={row.name}>
            {
                Object.keys(row).map((element: string) => {
                    return (<td
                        className={cx(classes.td)}
                        data-label={element.charAt(0).toUpperCase() + element.slice(1)}
                        key={element}>
                        {row[element]}
                    </td>)
                })
            }
        </tr>
    ));

    return (
        <Container mt={20}>
            <TextInput
                placeholder="Search by any field"
                mb="md"
                icon={<IconSearch size={14} stroke={1.5} />}
                value={search}
                onChange={handleSearchChange}
            />
            <ScrollArea style={{ height: '50vh' }} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
                <Table
                    horizontalSpacing="md"
                    verticalSpacing="xs"
                    sx={{ tableLayout: 'fixed'/*, minWidth: 700*/ }}
                >
                    <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
                        <tr>
                            {
                                Object.keys(data.data[0]).map((element: string) => {
                                    return (
                                        <Th
                                            sorted={sortBy === element}
                                            reversed={reverseSortDirection}
                                            onSort={() => setSorting(element)}
                                            key={element}
                                        >
                                            {element.charAt(0).toUpperCase() + element.slice(1)}
                                        </Th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {rows.length > 0 ? (
                            rows
                        ) : (
                            <tr>
                                <td colSpan={Object.keys(data.data[0]).length}>
                                    <Text weight={500} align="center">
                                        Nothing found
                                    </Text>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </ScrollArea>
        </Container>)
}