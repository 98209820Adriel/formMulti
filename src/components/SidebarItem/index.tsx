import { Link } from 'react-router-dom';
import * as C from './styles';
import { ReactComponent as ProfileICon } from '../../svgs/profile.svg';
import { ReactComponent as BookICon } from '../../svgs/book.svg';
import { ReactComponent as MailICon } from '../../svgs/mail.svg';

type Props ={
    title:string;
    description: string;
    icon: string;
    path: string;
    active: boolean
}

export const SidebarItem = ({title, description, icon, path, active}:Props)=>{

    return(
        <C.Container>
            <Link className='link' to={path}>
                <C.Info>
                    <C.Title>
                        {title}
                    </C.Title>
                    <C.Description>
                        {description}
                    </C.Description>
                </C.Info>
                <C.IconArea active={active}> 
                    {icon === 'profile' &&
                        <ProfileICon fill='white' width={24} height={24} />
                    }
                     {icon === 'book' &&
                        <BookICon fill='white' width={24} height={24} />
                    }
                     {icon === 'mail' &&
                        <MailICon fill='white' width={24} height={24} />
                    }
                </C.IconArea>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    );
}