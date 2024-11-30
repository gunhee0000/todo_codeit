// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import memberModel from '@/models/member/member.model';
import BadReqError from './error/bad_request_error';

async function add(req: NextApiRequest, res: NextApiResponse) {
  const { uid, email, displayName, photoURL } = req.body;
  if (uid === undefined || uid === null) {
    throw new BadReqError('uid가 누락되었습니다.');
  }
  if (email === undefined || email === null) {
    throw new BadReqError('email이 누락되었습니다.');
  }

  /* 반복 사용 부분 -> /models/member/member.model.ts에 member model 생성 */

  // try {
  //   const addData = {
  //     uid,
  //     email,
  //     displayName: displayName ?? '', //존재하지 않으면 빈string
  //     photoURL: photoURL ?? '',
  //   };

  //   /* Transaction으로 변경 */

  //   // const addReault = await FirebaseAdmin.getInstance()
  //   //   .Firebase.collection('members')
  //   //   .doc(uid)
  //   //   .set({addData});

  //   const screenName = (email as string).replace('@gmail.com', ''); //@gmail.com을 제거 (''으로 replace)
  //   // await FirebaseAdmin.getInstance()
  //   //   .Firebase.collection('screen_names')
  //   //   .doc(screenName)
  //   //   .set({addData});

  //   const addResult = await FirebaseAdmin.getInstance().Firebase.runTransaction(async (transaction) => {
  //     const memberRef = FirebaseAdmin.getInstance().Firebase.collection('members').doc(uid);
  //     const screenNameRef = FirebaseAdmin.getInstance().Firebase.collection('screen_names').doc(screenName);

  //     const memberDoc = await transaction.get(memberRef);
  //     if (memberDoc.exists) {
  //       //이미 추가된 상태
  //       return false;
  //     }
  //     await transaction.set(memberRef, addData);
  //     await transaction.set(screenNameRef, addData);
  //     return true;
  //   });

  //   if (addResult === false) {
  //     return res.status(201).json({ result: true, id: uid });
  //   }
  //   return res.status(200).json({ result: true, id: uid });
  // } catch (err) {
  //   console.error(err);
  //   res.status(500).json({ result: false });
  // }

  const addReault = await memberModel.add({ uid, email, displayName, photoURL });
  if (addReault.result === true) {
    return res.status(200).json(addReault);
  }
  res.status(500).json(addReault);
}

async function findByScreenName(req: NextApiRequest, res: NextApiResponse) {
  const { screenName } = req.query;
  if (screenName === undefined || screenName === null) {
    throw new BadReqError('screenName 누락되었습니다.');
  }
  const extractScreenName = Array.isArray(screenName) ? screenName[0] : screenName;
  const findResult = await memberModel.findByScreenName(extractScreenName);
  if (findResult === null) {
    return res.status(404).end();
  }
  res.status(200).json(findResult);
}

const MemberCtrl = {
  add,
  findByScreenName,
};

export default MemberCtrl;
