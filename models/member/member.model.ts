import FirebaseAdmin from '../firebase_admin';
import { InAuthUser } from '../in_auth_user';

const MEMBER_COL = 'members';
const SCREENNAME_COL = 'screen_names';

type AddResult = { result: true; id: string } | { result: false; message: string };

async function add({ uid, email, displayName, photoURL }: InAuthUser): Promise<AddResult> {
  try {
    const addData = {
      uid,
      email,
      displayName: displayName ?? '', //존재하지 않으면 빈string
      photoURL: photoURL ?? '',
    };

    /* Transaction으로 변경 */

    // const addReault = await FirebaseAdmin.getInstance()
    //   .Firebase.collection('members')
    //   .doc(uid)
    //   .set({addData});

    const screenName = (email as string).replace('@gmail.com', ''); //@gmail.com을 제거 (''으로 replace)
    // await FirebaseAdmin.getInstance()
    //   .Firebase.collection('screen_names')
    //   .doc(screenName)
    //   .set({addData});

    const addResult = await FirebaseAdmin.getInstance().Firebase.runTransaction(async (transaction) => {
      const memberRef = FirebaseAdmin.getInstance().Firebase.collection('members').doc(uid);
      const screenNameRef = FirebaseAdmin.getInstance().Firebase.collection('screen_names').doc(screenName);

      const memberDoc = await transaction.get(memberRef);
      if (memberDoc.exists) {
        //이미 추가된 상태
        return false;
      }
      await transaction.set(memberRef, addData);
      await transaction.set(screenNameRef, addData);
      return true;
    });

    if (addResult === false) {
      return { result: true, id: uid };
    }
    return { result: true, id: uid };
  } catch (err) {
    console.error(err);
    return { result: false, message: '서버 에러' };
  }
}

const memberModel = {
  add,
};

export default memberModel;
